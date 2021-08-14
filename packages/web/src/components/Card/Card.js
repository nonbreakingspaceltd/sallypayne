export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: String,
    image: Object,
    price: String,
    variant: String,
  },
  computed: {
    additionalCssClasses() {
      const { variant } = this;
      return variant && `sp-c-card--${variant}`;
    },
  },
};
