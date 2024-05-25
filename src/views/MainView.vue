<template>
	<div class="main-view">
		<div class="main-view__media"></div>

		<div class="main-view__text-section">
			<p v-html="t('main.main-text-1')"></p>
		</div>

		<div class="main-view__section-wrapper">
			<p class="main-view__section-title">
				{{ t('main.our-products') }}
			</p>

			<p class="main-view__section-subtitle">
				{{ t('main.our-products-description') }}
			</p>

			<div class="main-view__products-showcase">
				<div class="main-view__product-card">
					<div class="main-view__product-image"></div>

					<p class="main-view__product-title">ნიგოზი (langvar)</p>

					<p class="main-view__product-description">პროდუქტის მოკლე აღწერა (langvar)</p>
				</div>
				<div class="main-view__product-card">
					<div class="main-view__product-image"></div>

					<p class="main-view__product-title">კაკალი (langvar)</p>

					<p class="main-view__product-description">პროდუქტის მოკლე აღწერა (langvar)</p>
				</div>
				<div class="main-view__product-card">
					<div class="main-view__product-image"></div>

					<p class="main-view__product-title">სეტკები (langvar)</p>

					<p class="main-view__product-description">პროდუქტის მოკლე აღწერა (langvar)</p>
				</div>
				<div class="main-view__product-card">
					<div class="main-view__product-image"></div>

					<p class="main-view__product-title">ბითუმად (langvar)</p>

					<p class="main-view__product-description">პროდუქტის მოკლე აღწერა (langvar)</p>
				</div>
			</div>
		</div>

		<div class="main-view__text-section">
			<p>{{ t('main.main-text-2') }}</p>
		</div>

		<div class="main-view__section-wrapper main-view__orchards-section">
			<p class="main-view__section-title">
				{{ t('main.our-orchards') }}
			</p>

			<p class="main-view__section-subtitle">
				{{ t('main.our-orchards-description') }}
			</p>

			<CarouselWrapper :slides="slides" :items-to-show="carouselVisibleItems" />
		</div>

		<div
			class="main-view__text-section main-view__text-section--narrow"
			v-html="t('main.main-text-3')"
		/>

		<div class="main-view__section-wrapper main-view__production-section">
			<p class="main-view__section-title">
				{{ t('main.our-production') }}
			</p>

			<p class="main-view__section-subtitle">
				{{ t('main.our-production-description') }}
			</p>

			<CarouselWrapper :slides="slides" :items-to-show="carouselVisibleItems" />
		</div>

		<div class="main-view__text-section main-view__text-section--narrow">
			<p v-html="t('main.main-text-4')"></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';
	import { calculateMediaQueryMax, useTranslation } from '@/utils';
	import { CarouselWrapper } from '@/components';

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

	const carouselVisibleItems = ref(1.3);

	window.matchMedia('screen and (max-width: 600px)').onchange = (e) =>
		(carouselVisibleItems.value = e.matches ? 1.3 : 3.5);

	onMounted(() => (carouselVisibleItems.value = calculateMediaQueryMax(600) ? 1.3 : 3.5));
</script>

<style lang="scss">
	.main-view {
		$parent: &;
		display: flex;
		flex-direction: column;
		width: 100%;

		&__section-title {
			margin-bottom: 1.2rem;
			font-size: 3.6rem;
			font-weight: $wv-fw-semi-bold;
			line-height: 4.8rem;
			color: #6c7340;
		}

		&__media {
			width: 100%;
			height: 70rem;
			background-color: black;
		}

		&__section-wrapper {
			padding: 0 10rem;
		}

		&__section-subtitle {
			margin-bottom: 3.2rem;
			font-size: 1.6rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222;
		}

		&__products-showcase {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(20rem, calc(25% - 1.5rem)));
			justify-content: center;
			gap: 2rem;
		}

		&__product-image {
			aspect-ratio: 1;
			margin-bottom: 1.2rem;
			border-radius: 1.2rem;
			background-color: black;
		}

		&__product-title {
			margin-bottom: 0.8rem;
			font-size: 2rem;
			font-weight: $wv-fw-medium;
			line-height: 2.4rem;
			color: #1e1e1e;
		}

		&__product-description {
			font-size: 1.6rem;
			font-weight: $wv-fw-regular;
			line-height: 2rem;
			color: #222222;
			opacity: 60%;
		}

		&__orchards-section,
		&__production-section {
			position: relative;
			height: fit-content;
		}

		&__text-section {
			margin: 8rem 0;
			padding: 0 10rem;
			font-size: 1.8rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222;
			opacity: 70%;

			&--narrow {
				padding: 0 20%;
			}
		}

		@media only screen and (max-width: 600px) {
			&__section-wrapper,
			&__text-section {
				padding: 0 1.6rem;
			}
		}

		@media only screen and (max-width: 430px) {
			&__section-title {
				font-size: 2rem;
				line-height: 2.4rem;
			}

			&__section-subtitle,
			&__text-section {
				font-size: 1.4rem;
				line-height: 2.4rem;
			}

			&__text-section {
				margin: 4rem 0;
			}

			&__text-section:last-of-type {
				margin-bottom: 6rem;
			}

			&__product-title {
				font-size: 1.4rem;
				line-height: 1.7rem;
			}

			&__product-description {
				font-size: 1.2rem;
				line-height: 2rem;
			}
		}
	}
</style>
