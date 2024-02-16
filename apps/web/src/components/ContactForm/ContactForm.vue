<template>
  <form
    action="/contact"
    class="sp-c-contact-form"
    name="contact"
    method="POST"
    netlify-honeypot="contact-form-honeypot-field"
    data-netlify-recaptcha="true"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label for="contact-form-honeypot-field">Ingnore this field if you're human:</label>
      <input name="contact-form-honeypot-field" />
    </p>
    <div class="sp-c-contact-form__group">
      <label class="sp-c-contact-form__label" for="formName">Full Name</label>
      <input class="sp-c-contact-form__input" type="text" name="name" id="formName" required />
    </div>
    <div class="sp-c-contact-form__group">
      <label class="sp-c-contact-form__label" for="formEmail">Email Address</label>
      <input class="sp-c-contact-form__input" type="email" name="email" id="formEmail" required />
    </div>
    <div class="sp-c-contact-form__group">
      <label class="sp-c-contact-form__label" for="formMessage">What would you like to say?</label>
      <textarea class="sp-c-contact-form__textarea" name="message" id="formMessage" required />
    </div>
    <div class="sp-c-contact-form__group" data-netlify-recaptcha="true"></div>
    <div class="sp-c-contact-form__actions">
      <Button type="submit" class="sp-c-contact-form__submit" :variants="['color-a']">
        Send your message
      </Button>
    </div>
  </form>
</template>

<script>
import Button from '../Button';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="pcss">
.sp-c-contact-form {
  max-width: 800px;
  margin-bottom: var(--space-y-6);

  @media (--mq-md) {
    margin-bottom: var(--space-y-8);
  }
}

.sp-c-contact-form__group {
  padding-bottom: var(--space-y-4);

  @media (--mq-md) {
    padding-bottom: var(--space-y-5);
  }
}

.sp-c-contact-form__label {
  display: block;
  padding-bottom: var(--space-y-1);
  font-size: 16px;
  line-height: var(--space-y-6);

  @media (--mq-md) {
    font-size: 18px;
    padding-bottom: var(--space-y-2);
  }
}

.sp-c-contact-form__input,
.sp-c-contact-form__textarea {
  width: 100%;
  appearance: none;
  border: 4px dotted #ddd;
  padding: var(--space-y-2);
  outline: none;
  transition: border-color 0.2s;
  font-size: 16px;
  line-height: var(--space-y-6);
  background: transparent;

  &:focus {
    border-color: var(--color-brand-danube);
  }
}

.sp-c-contact-form__textarea {
  height: 80px;
  resize: vertical;
}
</style>
