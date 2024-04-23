<template>
	<div class="our-company">
		<div class="our-company__banner">
			<p>{{ t('banner.header.company') }}</p>
		</div>

		<div class="our-company__vision">
			<div class="our-company__vision-left">
				<p class="our-company__section-title">
					{{ t('our-history.vision.title') }}
				</p>
				<p
					class="our-company__section-description"
					v-html="t('our-history.vision.description')"
				></p>
			</div>
			<div class="our-company__vision-right">
				<img src="../assets/images/orchard-sample-image.jpeg" />
				<img src="../assets/images/orchard-sample-image.jpeg" />
			</div>
		</div>

		<div class="our-company__company">
			<p class="our-company__section-title">
				{{ t('our-history.company.title') }}
			</p>
			<p class="our-company__section-description" v-html="t('our-history.company.description')"></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useTranslation } from '@/utils';

	const { t } = useTranslation();
</script>

<style lang="scss" scoped>
	.our-company {
		$parent: &;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		&__banner {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 27rem;
			margin-bottom: 8rem;
			font-size: 5rem;
			font-weight: $wv-fw-semi-bold;
			background-color: black;
			color: #ffffff;
		}

		&__section-title {
			margin-bottom: 2.4rem;
			font-size: 3.6rem;
			font-weight: $wv-fw-semi-bold;
			line-height: 4.8rem;
			color: #6c7340;
		}

		&__section-description {
			font-size: 1.8rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222;
			opacity: 70%;
		}

		&__vision {
			display: flex;
			justify-content: center;
			gap: 2rem;
			margin-bottom: 13rem;
			padding: 1.3rem 10rem;
		}

		&__vision-left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 50%;
		}

		&__vision-right {
			display: flex;
			align-items: center;
			gap: 2rem;
			max-width: 50%;

			img {
				position: relative;
				max-width: calc(50% - 1rem);
				border-radius: 1.2rem;

				&:nth-child(1) {
					top: -1.3rem;
				}

				&:nth-child(2) {
					top: 1.3rem;
				}
			}
		}

		&__company {
			max-width: 55%;
			margin-bottom: 8rem;

			#{$parent}__section-title {
				text-align: center;
			}
		}

		@media only screen and (max-width: 1310px) {
			&__vision {
				flex-wrap: wrap;
				max-width: 55%;
				padding: 1.3rem 0;
			}

			&__vision-left,
			&__vision-right {
				max-width: 100%;
				margin-bottom: 2.4rem;
			}
		}

		@media only screen and (max-width: 1024px) {
			&__vision,
			&__company {
				max-width: 65%;
			}
		}

		@media only screen and (max-width: 768px) {
			&__vision,
			&__company {
				max-width: 75%;
			}
		}

		@media only screen and (max-width: 430px) {
			&__banner {
				margin-bottom: 4rem;
			}

			&__section-title {
				margin-bottom: 1.6rem;
				font-size: 2rem;
				line-height: 2.4rem;
			}

			&__section-description {
				font-size: 1.4rem;
				line-height: 2.2rem;
			}

			&__vision,
			&__company {
				max-width: 90%;
				margin-bottom: 4rem;
				padding: 0;
			}

			&__company {
				margin-bottom: 6rem;
			}
		}
	}
</style>
