<template>
  <Button class="sp-c-button-etsy" :href="href">
    <template v-slot:default> Buy now on <span class="sp-u-sr-only">Etsy</span> </template>
    <template v-slot:icon>
      <IconEtsy class="sp-c-button-etsy__icon" />
    </template>
  </Button>
</template>

<script>
import Button from '../Button';
import IconEtsy from '../../assets/icons/etsy.svg';

export default {
  components: {
    Button,
    IconEtsy,
  },
  props: {
    href: {
      type: String,
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-button-etsy {
  background-color: var(--color-social-etsy);
  border-color: var(--color-social-etsy);
  color: var(--color-white);
}

.sp-c-button-etsy__icon {
  fill: var(--color-white);
  width: 50px;
  vertical-align: -10px;
  margin-left: 10px;
}
</style>
