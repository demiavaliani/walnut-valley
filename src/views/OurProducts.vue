<template>
	<div class="our-products" ref="ourProductsView">
		<div class="our-products__section-wrapper">
			<p class="our-products__section-title">
				{{ t('our-products.title') }}
			</p>

			<p class="our-products__section-description" v-html="t('our-products.description')" />

			<div class="our-products__products-showcase">
				<div class="our-products__product-card">
					<img class="our-products__product-image" src="../assets/images/product-inshell.jpg" />

					<p class="our-products__product-title">{{ t('our-products.product-1.title') }}</p>

					<p class="our-products__product-description">
						{{ t('our-products.product-1.description') }}
					</p>
				</div>
				<div class="our-products__product-card">
					<img class="our-products__product-image" src="../assets/images/product-shelled.png" />

					<p class="our-products__product-title">{{ t('our-products.product-2.title') }}</p>

					<p class="our-products__product-description">
						{{ t('our-products.product-2.description') }}
					</p>
				</div>
			</div>
		</div>

		<div class="our-products__section-wrapper">
			<CarouselWrapper
				:slides="slides"
				:items-to-show="carouselVisibleItems"
				:snap-align="carouselSnapAlign"
			/>
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
			image: 'walnut-3.jpg',
		},
		{
			title: 'Slide #2',
			content: 'Slide 2 content.',
			image: 'walnut-4.jpg',
		},
		{
			title: 'Slide #3',
			content: 'Slide 3 content.',
			image: 'walnut-5.jpg',
		},
		{
			title: 'Slide #4',
			content: 'Slide 4 content.',
			image: 'walnut-6.jpg',
		},
	];

	const ourProductsView = ref<HTMLElement | null>(null);
	const carouselVisibleItems = ref(2);
	const carouselSnapAlign = ref();

	useResizeObserver(ourProductsView, (entries) => {
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
				carouselSnapAlign.value = 'center-odd';
		}
	});
</script>

<style lang="scss">
	.our-products {
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

		&__section-wrapper {
			margin: 8rem 0;
			padding: 0 10rem;
		}

		&__section-description {
			margin-bottom: 3.2rem;
			font-size: 1.8rem;
			font-weight: $wv-fw-regular;
			line-height: 2.4rem;
			color: #222222;
		}

		&__products-showcase {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			justify-content: center;
			gap: 5rem;
		}

		&__product-image {
			max-width: 50rem;
			width: 100%;
			aspect-ratio: 1;
			margin-bottom: 1.2rem;
			border-radius: 1.2rem;
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

		@media only screen and (max-width: 600px) {
			&__section-wrapper {
				padding: 0 1.6rem;
			}
		}

		@media only screen and (max-width: 430px) {
			&__section-title {
				font-size: 2rem;
				line-height: 2.4rem;
			}

			&__section-description {
				font-size: 1.4rem;
				line-height: 2.4rem;
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

		.carousel {
			&__item img {
				height: 500px;
				object-fit: cover;
			}
		}
	}
</style>
