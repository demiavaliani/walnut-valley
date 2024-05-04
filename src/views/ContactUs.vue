<template>
	<div class="contact-us">
		<form class="contact-us__form" ref="contactForm" @submit.prevent="sendEmail">
			<label class="contact-us__form-label">Name</label>
			<input type="text" name="contact_name" />
			<label class="contact-us__form-label">Email</label>
			<input type="email" name="contact_email" />
			<label class="contact-us__form-label">Phone</label>
			<input type="tel" name="contact_phone" />
			<label class="contact-us__form-label">Message</label>
			<textarea name="contact_message"></textarea>
			<input type="submit" value="Send" />
		</form>
	</div>
</template>

<script lang="ts" setup>
	import emailjs from '@emailjs/browser';
	import { ref } from 'vue';

	const SERVICE_ID = 'wv_email_form';
	const TEMPLATE_ID = 'wv_default_template';
	const PUBLIC_KEY = 'p3cl0P9MpyI8OB0Fk';

	const contactForm = ref<HTMLFormElement | null>();

	const sendEmail = () => {
		if (contactForm.value) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.value, { publicKey: PUBLIC_KEY });
		}
	};
</script>

<style lang="scss">
	.contact-us {
		display: flex;
		justify-content: center;

		&__form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 30%;
		}

		&__form-label {
			font-size: 1.4rem;
		}
	}
</style>
