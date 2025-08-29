<script setup lang="ts">
import src from './home-20230203.svg?url';

interface Props {
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="sp-c-home-media">
    <img
      :src="src"
      class="sp-c-home-media__image"
      alt="Illustration of Sally Payne style characters saying 'Hello'"
      width="2000"
      height="1227"
    />
  </div>
</template>

<style src="./styles.css" />
