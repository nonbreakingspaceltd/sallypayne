<template>
  <component :is="as || 'div'">
    <div v-if="hasLeadingGuards" :tabIndex="disabled ? -1 : 0" :style="hidden" aria-hidden="true" />
    <div v-if="hasLeadingGuards" :tabIndex="disabled ? -1 : 1" :style="hidden" aria-hidden="true" />
    <div @focusout="onBlur" v-bind="groupAttr" data-lock>
      <slot></slot>
    </div>
    <div v-if="hasTailingGuards" :tabIndex="disabled ? -1 : 0" :style="hidden" aria-hidden="true" />
  </component>
</template>

<script>
import moveFocusInside, { focusInside, focusIsHidden } from 'focus-lock';
import { constants } from 'focus-lock';

function deferAction(action) {
  const setImmediate = window.setImmediate;
  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

let lastActiveTrap = 0;
let lastActiveFocus = null;

let focusWasOutsideWindow = false;

const focusOnBody = () => document && document.activeElement === document.body;

const isFreeFocus = () => focusOnBody() || focusIsHidden();

const activateTrap = () => {
  let result = false;
  if (lastActiveTrap) {
    const { observed, onActivation } = lastActiveTrap;
    if (focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus) {
      if (observed && !focusInside(observed)) {
        onActivation();
        result = moveFocusInside(observed, lastActiveFocus);
      }
      focusWasOutsideWindow = false;
      lastActiveFocus = document && document.activeElement;
    }
  }
  return result;
};

const reducePropsToState = (propsList) => {
  return propsList.filter(({ disabled }) => !disabled).slice(-1)[0];
};

const handleStateChangeOnClient = (trap) => {
  if (lastActiveTrap !== trap) {
    lastActiveTrap = null;
  }
  lastActiveTrap = trap;
  if (trap) {
    activateTrap();
    deferAction(activateTrap);
  }
};

let instances = [];

const emitChange = () => {
  handleStateChangeOnClient(reducePropsToState(instances));
};

const onTrap = (event) => {
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

export default {
  name: 'FocusLoop',
  props: {
    returnFocus: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    noFocusGuards: {
      type: [Boolean, String],
      default: false,
    },
    group: {
      type: String,
    },
    as: {
      type: String
    }
  },
  data() {
    return {
      data: {},
      hidden: '', //    "width: 1px;height: 0px;padding: 0;overflow: hidden;position: fixed;top: 0;left: 0;"
    };
  },
  computed: {
    groupAttr() {
      return { [constants.FOCUS_GROUP]: this.group };
    },
    hasLeadingGuards() {
      return this.noFocusGuards !== true;
    },
    hasTailingGuards() {
      return this.hasLeadingGuards && this.noFocusGuards !== 'tail';
    },
  },
  watch: {
    disabled() {
      this.data.disabled = this.disabled;
      emitChange();
    },
  },
  methods: {
    onBlur() {
      deferAction(emitChange);
    },
  },
  mounted() {
    this.data.vue = this;
    this.data.observed = this.$el && this.$el.querySelector('[data-lock]');
    this.data.disabled = this.disabled;
    this.data.onActivation = () => {
      this.originalFocusedElement =
        this.originalFocusedElement || (document && document.activeElement);
    };
    if (!instances.length) {
      attachHandler();
    }
    instances.push(this.data);
    emitChange();
  },
  beforeUnmount() {
    instances = instances.filter(({ vue }) => vue !== this);
    if (!instances.length) {
      detachHandler();
    }
    if (this.returnFocus && this.originalFocusedElement && this.originalFocusedElement.focus) {
      this.originalFocusedElement.focus();
    }
    emitChange();
  },
};
</script>
