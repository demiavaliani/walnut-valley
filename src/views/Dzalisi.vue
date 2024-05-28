<template>
	<div class="dzalisi">
		<div class="dzalisi__banner">
			<p class="dzalisi__banner-title">{{ t('dzalisi.banner.title') }}</p>
		</div>

		<div class="dzalisi__body">
			<div class="dzalisi__text">
				<p>{{ t('dzalisi.body.text-1') }}</p>
			</div>

			<img class="dzalisi__image" src="../assets/images/orchard-sample-image.jpeg" />

			<div class="dzalisi__text">
				<p v-html="t('dzalisi.body.text-2')"></p>
			</div>

			<div class="dzalisi__bottom-images-wrapper">
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
				<img class="dzalisi__image-bottom" src="../assets/images/orchard-sample-image.jpeg" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useTranslation } from '@/utils';

	const { t } = useTranslation();
</script>

<style lang="scss">
	.dzalisi {
		&__banner {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 50.5rem;
			margin-bottom: 8rem;
			background-color: black;
			color: #ffffff;
		}

		&__banner-title {
			text-align: center;
			font-size: 5rem;
			line-height: 6rem;
			font-weight: $wv-fw-semi-bold;
		}

		&__body {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__text {
			max-width: 55%;
			font-size: 1.8rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222b2;

			&:last-child {
				margin-bottom: 10rem;
			}

			@media only screen and (max-width: 1024px) {
				max-width: 65%;
			}

			@media only screen and (max-width: 768px) {
				max-width: 75%;
			}

			@media only screen and (max-width: 430px) {
				max-width: 90%;
				font-size: 1.4rem;
				line-height: 2.4rem;
			}
		}

		&__image {
			width: 55%;
			margin: 5rem 0;
			border-radius: 1.2rem;

			@media only screen and (max-width: 1024px) {
				width: 65%;
			}

			@media only screen and (max-width: 768px) {
				width: 75%;
			}

			@media only screen and (max-width: 430px) {
				width: 90%;
			}
		}

		&__bottom-images-wrapper {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-content: center;
			gap: 2rem;
			width: 100%;
			margin: 10rem 0;
			padding: 0 10rem;

			img {
				max-width: 100%;
				border-radius: 1.2rem;
			}

			@media only screen and (max-width: 900px) {
				padding: 0 5rem;
			}

			@media only screen and (max-width: 768px) {
				grid-template-columns: 1fr 1fr;
			}

			@media only screen and (max-width: 430px) {
				padding: 0 2rem;
			}
		}
	}
</style>
