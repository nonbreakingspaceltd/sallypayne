<script setup lang="ts">
interface Props {
  imgSrc: string;
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="sp-c-home-media">
    <img
      :src="imgSrc"
      class="sp-c-home-media__image"
      alt="Illustration of Sally Payne style characters saying 'Hello'"
      width="2000"
      height="1227"
    />
  </div>
</template>

<style src="./styles.css" />
