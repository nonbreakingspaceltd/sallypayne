<template>
  <form
    v-on:submit.prevent="handleSubmit"
    action="/contact/success/"
    class="c-contact-form"
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Ingnore this field if you're human:
        <input name="bot-field" />
      </label>
    </p>
    <div class="c-contact-form__group">
      <label class="c-contact-form__label" for="formName">Full Name</label>
      <input
        class="c-contact-form__input"
        type="text"
        name="name"
        id="formName"
        v-model="formData.name"
        required
      />
    </div>
    <div class="c-contact-form__group">
      <label class="c-contact-form__label" for="formEmail">Email Address</label>
      <input
        class="c-contact-form__input"
        type="email"
        name="email"
        id="formEmail"
        v-model="formData.email"
        required
      />
    </div>
    <div class="c-contact-form__group">
      <label class="c-contact-form__label" for="formMessage">What would you like to say?</label>
      <textarea
        class="c-contact-form__textarea"
        name="message"
        id="formMessage"
        required
        v-model="formData.message"
      ></textarea>
    </div>
    <div class="c-contact-form__actions">
      <Button
        type="submit"
        class="c-contact-form__submit"
        :variants="['color-a']"
        :disabled="submitting"
      >
        Send your message
      </Button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import Button from '../Button';

export default {
  components: {
    Button,
  },
  setup() {
    const formData = ref({
      name: null,
      email: null,
      message: null,
    });
    const submitting = ref(false);

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    };

    const handleSubmit = async (event) => {
      try {
        this.submitting = true;
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': event.target.getAttribute('name'),
            ...formData,
          }),
        });
        this.submitting = false;
      } catch (error) {
        throw new Error(error);
      }
    };

    return {
      formData,
      submitting,
      handleSubmit,
    };
  },
};
</script>

<style lang="postcss">
.c-contact-form {
  max-width: 800px;
  margin-bottom: 24px;

  @media (--mq-m) {
    margin-bottom: 32px;
  }
}

.c-contact-form__group {
  padding-bottom: 16px;

  @media (--mq-m) {
    padding-bottom: 20px;
  }
}

.c-contact-form__label {
  display: block;
  padding-bottom: 4px;
  font-size: 16px;
  line-height: 24px;

  @media (--mq-m) {
    font-size: 18px;
    padding-bottom: 8px;
  }
}

.c-contact-form__input,
.c-contact-form__textarea {
  width: 100%;
  appearance: none;
  border: 4px dotted #ddd;
  padding: 8px;
  outline: none;
  transition: border-color 0.2s;
  font-size: 16px;
  line-height: 24px;
  background: transparent;

  &:focus {
    border-color: var(--color-brand-danube);
  }
}

.c-contact-form__textarea {
  height: 160px;
  resize: none;
}
</style>
