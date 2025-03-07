

<script setup lang="ts">
import ArrowLeft from '../../assets/icons/arrow-left.svg?component';

import type { BackLinkProps } from './types';

defineProps<BackLinkProps>();
</script>

<template>
  <nav class="sp-c-backlink">
    <a class="sp-c-backlink__link" :href="path">
      <ArrowLeft class="sp-c-backlink__icon" />
      <span class="sp-u-sr-only">
        {{ label }}
      </span>
    </a>
  </nav>
</template>

<style src="./styles.css" />
