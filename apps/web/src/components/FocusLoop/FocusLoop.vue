<script setup lang="ts">
import moveFocusInside, {
  constants,
  focusInside,
  focusIsHidden,
} from 'focus-lock';
import {
  computed,
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import type { FocusLoopProps } from './types';

const props = defineProps<FocusLoopProps>();

const noFocusGuards = computed(() => props.noFocusGuards ?? false);

const data = ref<{
  vue?: any;
  observed?: Element | null;
  disabled?: boolean;
  onActivation?: () => void;
}>({});

const hidden = ref(''); // "width: 1px;height: 0px;padding: 0;overflow: hidden;position: fixed;top: 0;left: 0;"
let originalFocusedElement: Element | null = null;

function deferAction(action: () => void) {
  const setImmediate = window.setImmediate;
  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

let lastActiveTrap: {
  observed: Element | null;
  onActivation: () => void;
} | null = null;
let lastActiveFocus: Element | null = null;
let focusWasOutsideWindow = false;
let instances: any[] = [];

const focusOnBody = () => document && document.activeElement === document.body;

const isFreeFocus = () => focusOnBody() || focusIsHidden();

const activateTrap = () => {
  let result = false;
  if (lastActiveTrap) {
    const { observed, onActivation } = lastActiveTrap;
    if (focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus) {
      if (observed && !focusInside(observed as HTMLElement)) {
        onActivation();
        moveFocusInside(
          observed as HTMLElement,
          lastActiveFocus as HTMLElement,
        );
        result = true;
      }
      focusWasOutsideWindow = false;
      lastActiveFocus = document?.activeElement;
    }
  }
  return result;
};

const reducePropsToState = (propsList: any[]) => {
  return propsList.filter(({ disabled }) => !disabled).slice(-1)[0];
};

const handleStateChangeOnClient = (trap: any) => {
  if (lastActiveTrap !== trap) {
    lastActiveTrap = null;
  }
  lastActiveTrap = trap;
  if (trap) {
    activateTrap();
    deferAction(activateTrap);
  }
};

const emitChange = () => {
  handleStateChangeOnClient(reducePropsToState(instances));
};

const onTrap = (event?: Event) => {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

const onBlur = () => {
  deferAction(activateTrap);
};

const onWindowBlur = () => {
  focusWasOutsideWindow = true;
};

const attachHandler = () => {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

const detachHandler = () => {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

const groupAttr = computed(() => ({ [constants.FOCUS_GROUP]: props.group }));

const hasLeadingGuards = computed(() => noFocusGuards.value !== true);

const hasTailingGuards = computed(
  () => hasLeadingGuards.value && noFocusGuards.value !== 'tail',
);

const handleBlur = () => {
  deferAction(emitChange);
};

watch(
  () => props.disabled,
  () => {
    data.value.disabled = props.disabled;
    emitChange();
  },
);

onMounted(() => {
  data.value.vue = getCurrentInstance();
  data.value.observed = document.querySelector('[data-lock]');
  data.value.disabled = props.disabled;
  data.value.onActivation = () => {
    originalFocusedElement = originalFocusedElement || document?.activeElement;
  };
  if (!instances.length) {
    attachHandler();
  }
  instances.push(data.value);
  emitChange();
});

onBeforeUnmount(() => {
  instances = instances.filter(({ vue }) => vue !== getCurrentInstance());
  if (!instances.length) {
    detachHandler();
  }
  if (
    props.returnFocus &&
    originalFocusedElement &&
    'focus' in originalFocusedElement
  ) {
    (originalFocusedElement as HTMLElement).focus();
  }
  emitChange();
});
</script>

<template>
  <component :is="as || 'div'">
    <div v-if="hasLeadingGuards" :tabIndex="disabled ? -1 : 0" :style="hidden" aria-hidden="true" />
    <div v-if="hasLeadingGuards" :tabIndex="disabled ? -1 : 1" :style="hidden" aria-hidden="true" />
    <div @focusout="handleBlur" v-bind="groupAttr" data-lock>
      <slot></slot>
    </div>
    <div v-if="hasTailingGuards" :tabIndex="disabled ? -1 : 0" :style="hidden" aria-hidden="true" />
  </component>
</template>
