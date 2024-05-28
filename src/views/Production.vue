<template>
	<div class="production" ref="productionView">
		<div class="production__banner">
			<p class="production__banner-title">{{ t('production.banner-title') }}</p>
		</div>

		<div class="production__body">
			<p class="production__body-title">{{ t('production.body-title') }}</p>

			<div class="production__text">
				<p>{{ t('production.body-text-1') }}</p>
			</div>

			<div class="production__carousel">
				<CarouselWrapper
					:slides="slides"
					:items-to-show="carouselVisibleItems"
					:snap-align="carouselSnapAlign"
				/>
			</div>

			<div class="production__text">
				<p v-html="t('production.body-text-2')"></p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { useTranslation } from '@/utils';
	import { CarouselWrapper } from '@/components';
	import { useResizeObserver } from '@vueuse/core';

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

	const productionView = ref<HTMLElement | null>(null);
	const carouselVisibleItems = ref(1.3);
	const carouselSnapAlign = ref();

	useResizeObserver(productionView, (entries) => {
		const { width } = entries[0].contentRect;

		switch (true) {
			case width < 600:
				carouselVisibleItems.value = 1.2;
				carouselSnapAlign.value = 'start';
				break;
			case width > 3100:
				carouselVisibleItems.value = 6;
				carouselSnapAlign.value = 'center-even';
				break;
			case width > 2500:
				carouselVisibleItems.value = 5;
				carouselSnapAlign.value = 'center-odd';
				break;
			default:
				carouselVisibleItems.value = 4;
				carouselSnapAlign.value = 'center-even';
		}
	});
</script>

<style lang="scss">
	.production {
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
	}
</style>
