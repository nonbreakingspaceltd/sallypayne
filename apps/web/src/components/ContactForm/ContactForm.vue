
<script setup lang="ts">
import Button from '../Button';
</script>

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

<style src="./styles.css" />
