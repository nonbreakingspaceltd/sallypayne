

<script setup lang="ts">
import IconEtsy from '../../assets/icons/etsy.svg?component';
import Button from '../Button/Button.vue';
import type { EtsyButtonProps } from './types';

defineProps<EtsyButtonProps>();
</script>

<template>
  <Button class="sp-c-button-etsy" :href="href">
    <template v-slot:default> Buy now on <span class="sp-u-sr-only">Etsy</span> </template>
    <template v-slot:icon>
      <IconEtsy class="sp-c-button-etsy__icon" />
    </template>
  </Button>
</template>

<style src="./styles.css" />
