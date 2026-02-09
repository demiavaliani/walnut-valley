<template>
	<div class="production" ref="productionView">
		<div class="production__body">
			<p class="production__body-title">{{ t('production.body-title-1') }}</p>

			<div class="production__text">
				<p v-html="t('production.body-text-1')"></p>
			</div>

			<div class="production__images-wrapper">
				<img src="../assets/images/factory.jpg" />
				<img src="../assets/images/factory-2.jpg" />
			</div>

			<p class="production__body-title">{{ t('production.body-title-2') }}</p>

			<div class="production__text">
				<p v-html="t('production.body-text-2')"></p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useTranslation } from '@/utils';

	const { t } = useTranslation();
</script>

<style lang="scss">
	.production {
		&__body {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__body-title {
			margin: 8rem 0 2.4rem 0;
			padding: 0 2rem;
			text-align: center;
			font-size: 3.6rem;
			line-height: 4rem;
			font-weight: $wv-fw-bold;
			color: #6c7340;

			&:last-of-type {
				margin-top: 0;
			}

			@media only screen and (max-width: 430px) {
				font-size: 2rem;
				line-height: 2.4rem;
			}
		}

		&__text {
			max-width: 55%;
			font-size: 1.8rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222b2;

			&:last-child {
				margin-bottom: 8rem;
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

		&__images-wrapper {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 5rem;
			max-width: 90%;
			margin: 8rem 0;

			img {
				flex: 1 1 500px;
				max-width: 800px;
				min-width: 300px;
				object-fit: cover;
				border-radius: 1.2rem;
			}
		}
	}
</style>
