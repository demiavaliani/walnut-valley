<template>
	<div class="our-orchards">
		<div class="our-orchards__banner">
			<p class="our-orchards__banner-title">{{ t('our-orchards.banner-title') }}</p>
		</div>

		<div class="our-orchards__body">
			<p class="our-orchards__body-title">{{ t('our-orchards.body-title') }}</p>

			<div class="our-orchards__text">
				<p v-html="t('our-orchards.body-text-1')"></p>
			</div>

			<div class="our-orchards__carousel">
				<CarouselWrapper
					:slides="slides"
					:items-to-show="carouselVisibleItems"
					:snap-align="carouselSnapAlign"
				/>
			</div>

			<div class="our-orchards__text">
				<p v-html="t('our-orchards.body-text-2')"></p>
			</div>

			<div class="our-orchards__village">
				<div class="our-orchards__village-left">
					<p class="our-orchards__village-title">
						{{ t('our-orchards.village.title') }}
					</p>
					<p
						class="our-orchards__village-description"
						v-html="t('our-orchards.village.description')"
					/>
					<RouterLink :to="{ name: Views.DZALISI }">
						<WvButton
							class="our-orchards__village-button"
							:text="t('our-orchards.village.button-text')"
						/>
					</RouterLink>
				</div>
				<div class="our-orchards__village-right">
					<img src="../assets/images/orchard-sample-image.jpeg" />
					<img src="../assets/images/orchard-sample-image.jpeg" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';
	import { calculateMediaQueryMax, useTranslation } from '@/utils';
	import { CarouselWrapper, WvButton } from '@/components';
	import { Views } from '@/constants';

	const { t } = useTranslation();

	const slides = [
		{
			title: 'Slide #1',
			content: 'Slide 1 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #2',
			content: 'Slide 2 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #1',
			content: 'Slide 1 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #2',
			content: 'Slide 2 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #1',
			content: 'Slide 1 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #2',
			content: 'Slide 2 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #1',
			content: 'Slide 1 content.',
			image: 'orchard-sample-image.jpeg',
		},
		{
			title: 'Slide #2',
			content: 'Slide 2 content.',
			image: 'orchard-sample-image.jpeg',
		},
	];

	const carouselVisibleItems = ref();
	const carouselSnapAlign = ref();

	window.matchMedia('screen and (max-width: 600px)').onchange = (e) => {
		carouselVisibleItems.value = e.matches ? 1.3 : 4;
		carouselSnapAlign.value = e.matches ? 'center-odd' : 'center-even';
	};

	onMounted(() => {
		carouselVisibleItems.value = calculateMediaQueryMax(600) ? 1.3 : 4;
		carouselSnapAlign.value = calculateMediaQueryMax(600) ? 'center-odd' : 'center-even';
	});
</script>

<style lang="scss">
	.our-orchards {
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

		&__body-title {
			margin-bottom: 2.4rem;
			font-size: 3.6rem;
			line-height: 4rem;
			font-weight: $wv-fw-bold;
			color: #6c7340;

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

		&__carousel {
			margin: 8rem 0;
			padding: 0 10rem;

			@media only screen and (max-width: 600px) {
				padding: 0 1.6rem;
			}

			.carousel-wrapper {
				margin: 0;

				@media only screen and (min-width: 600px) {
					&__nav-button-left {
						left: -2.3rem;
					}

					&__nav-button-right {
						right: -2.3rem;
					}
				}
			}
		}

		&__village {
			display: flex;
			justify-content: center;
			gap: 2rem;
			margin: 8rem 0 10rem;
			padding: 1.3rem 10rem;
		}

		&__village-title {
			margin-bottom: 2.4rem;
			font-size: 3.2rem;
			font-weight: $wv-fw-semi-bold;
			line-height: 3.8rem;
			color: #6c7340;
		}

		&__village-description {
			margin-bottom: 2.4rem;
			font-size: 1.6rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222b2;
		}

		&__village-button {
			width: fit-content;
			font-size: 1.4rem;
			font-weight: $wv-fw-medium;
			line-height: 2rem;
		}

		&__village-left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 40%;
		}

		&__village-right {
			display: flex;
			align-items: center;
			gap: 2rem;
			max-width: 60%;

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

		@media only screen and (max-width: 1310px) {
			&__village {
				flex-wrap: wrap;
				max-width: 55%;
				padding: 1.3rem 0;
			}

			&__village-left,
			&__village-right {
				max-width: 100%;
				margin-bottom: 2.4rem;
			}
		}

		@media only screen and (max-width: 1024px) {
			&__village {
				max-width: 65%;
			}
		}

		@media only screen and (max-width: 768px) {
			&__village {
				max-width: 75%;
			}
		}

		@media only screen and (max-width: 430px) {
			&__village {
				max-width: 90%;
				padding: 0;
			}

			&__village-title {
				font-size: 2rem;
				line-height: 2.4rem;
			}

			&__village-description {
				font-size: 1.4rem;
				line-height: 2.4rem;
			}
		}
	}
</style>
