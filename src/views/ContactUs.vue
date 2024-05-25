<template>
	<div class="contact-us">
		<div class="contact-us__sides">
			<div class="contact-us__sides-left">
				<p class="contact-us__header">{{ t('contact-us.header') }}</p>

				<div class="contact-us__mobile">
					<div class="contact-us__icon-wrapper">
						<img src="@/assets/images/phone-icon.svg" />
					</div>
					<p>+995 579 33 66 08</p>
				</div>

				<div class="contact-us__address">
					<div class="contact-us__icon-wrapper">
						<img src="@/assets/images/location-icon.svg" />
					</div>
					<p>Tskaltubo street 29, Tbilisi, Georgia</p>
				</div>

				<div class="contact-us__social">
					<button class="contact-us__social-item">
						<img class="contact-us__social-item-icon" src="@/assets/images/facebook-icon.svg" />
					</button>
					<button class="contact-us__social-item">
						<img class="contact-us__social-item-icon" src="@/assets/images/instagram-icon.svg" />
					</button>
				</div>
			</div>

			<div class="contact-us__sides-right">
				<form class="contact-us__form" ref="contactForm" @submit.prevent="sendEmail">
					<input
						required
						class="contact-us__form-input"
						:placeholder="t('contact-us.label-name')"
						type="text"
						name="contact_name"
						@invalid="validate($event.target)"
						@input="validate($event.target)"
					/>

					<div class="contact-us__email-phone-wrapper">
						<input
							required
							class="contact-us__form-input"
							:placeholder="t('contact-us.label-email')"
							type="email"
							name="contact_email"
							@invalid="validate($event.target)"
							@input="validate($event.target)"
						/>
						<input
							required
							class="contact-us__form-input"
							:placeholder="t('contact-us.label-phone')"
							type="tel"
							name="contact_phone"
							@invalid="validate($event.target)"
							@input="validate($event.target)"
						/>
					</div>

					<textarea
						required
						class="contact-us__form-input contact-us__form-input-textarea"
						:placeholder="t('contact-us.label-message')"
						name="contact_message"
						@invalid="validate($event.target)"
						@input="validate($event.target)"
					></textarea>

					<WvButton
						:text="t('contact-us.submit-button')"
						class="contact-us__form-submit-button"
						type="submit"
						value="Send"
					/>
				</form>
			</div>
		</div>

		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8806479854056!2d44.77351107634191!3d41.74466717125683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044728de9850dfd%3A0xcb3d4e496e1dd967!2sTskaltubo%20St%2C%20T&#39;bilisi%2C%20Georgia!5e0!3m2!1sen!2see!4v1716120635359!5m2!1sen!2see"
			class="contact-us__map"
			allowfullscreen="false"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { useTranslation } from '@/utils';
	import { WvButton } from '@/components';
	import emailjs from '@emailjs/browser';

	const SERVICE_ID = 'wv_email_form';
	const TEMPLATE_ID = 'wv_default_template';
	const PUBLIC_KEY = 'p3cl0P9MpyI8OB0Fk';

	const { t } = useTranslation();

	const contactForm = ref<HTMLFormElement | null>();

	const validate = (el: HTMLInputElement | HTMLTextAreaElement | EventTarget | null) => {
		const element = el as HTMLInputElement | HTMLTextAreaElement;
		const validity = element.validity;
		const isInvalid = validity.valueMissing || validity.badInput || validity.typeMismatch;

		if (isInvalid) {
			element.setCustomValidity(t('contact-us.form-validity-message'));

			if (element.type === 'email') {
				element.setCustomValidity(t('contact-us.form-validity-message.email'));
			}
		} else {
			element.setCustomValidity('');
		}
	};

	const sendEmail = () => {
		if (contactForm.value) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.value, { publicKey: PUBLIC_KEY });
		}
	};
</script>

<style lang="scss">
	.contact-us {
		width: 100%;
		padding: 2rem 2rem 6rem 2rem;

		@media only screen and (min-width: 600px) {
			padding: 4.5rem 4rem;
		}

		@media only screen and (min-width: 1110px) {
			padding: 4.5rem 5rem;
		}

		@media only screen and (min-width: 1310px) {
			padding: 4.5rem 10rem;
		}

		&__sides {
			display: grid;
			grid-template-columns: auto;
			margin-bottom: 6.4rem;

			@media only screen and (min-width: 1024px) {
				grid-template-columns: 1fr 1fr;
			}
		}

		&__sides-left {
			margin-bottom: 6.4rem;

			@media only screen and (min-width: 1024px) {
				margin-bottom: 0;
			}
		}

		&__header {
			margin-bottom: 1.2rem;
			font-size: 2.8rem;
			font-weight: $wv-fw-bold;
			color: #6c7340;
		}

		&__mobile,
		&__address {
			display: flex;
			gap: 1.2rem;
			padding: 1.2rem 0;
			font-size: 2rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222;
		}

		&__social {
			display: flex;
			gap: 1.3rem;
			margin-top: 1.2rem;
		}

		&__social-item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 1.2rem;
			background-color: #ececec80;
		}

		&__social-item-icon {
			opacity: 1;
		}

		&__form {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.6rem;
			padding: 2rem;
			border: 1px solid #dddddd33;
			border-radius: 1.2rem;
			box-shadow: 0px 4px 24px 0px #0000000a;
		}

		&__form-input {
			width: 100%;
			padding: 1.6rem;
			border: 1px solid #e5e5e5;
			border-radius: 1.2rem;
		}

		&__form-input-textarea {
			height: 14.4rem;
			resize: vertical;
		}

		&__email-phone-wrapper {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1.6rem;
			width: 100%;

			@media only screen and (min-width: 431px) {
				grid-template-columns: 1fr 1fr;
			}
		}

		&__form-submit-button {
			width: fit-content;
			padding: 1.6rem 4rem;
			font-size: 1.4rem;
			line-height: 2rem;
		}

		&__map {
			width: 100%;
			height: 55rem;
			border: 0;
			border-radius: 1.6rem;
		}
	}
</style>
