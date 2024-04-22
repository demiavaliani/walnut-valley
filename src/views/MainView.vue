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

			<div class="main-view__orchards-carousel">
				<Carousel
					:items-to-show="carouselVisibleItems"
					:wrap-around="true"
					:mouse-drag="false"
					ref="orchardsCarousel"
				>
					<slide v-for="slide in slides" :key="slide">
						<div class="carousel__item">
							<img :src="getImageUrl(slide.image)" />
						</div>
					</slide>

					<template #addons>
						<button
							class="carousel-nav-button carousel-nav-button__left"
							@click="prevSlideOrchards"
						>
							<img src="../assets/images/arrow-left.svg" />
						</button>
						<button
							class="carousel-nav-button carousel-nav-button__right"
							@click="nextSlideOrchards"
						>
							<img src="../assets/images/arrow-right.svg" />
						</button>
					</template>
				</Carousel>
			</div>
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

			<div class="main-view__production-carousel">
				<Carousel
					:items-to-show="carouselVisibleItems"
					:wrap-around="true"
					:mouse-drag="false"
					ref="productionCarousel"
				>
					<slide v-for="slide in slides" :key="slide">
						<div class="carousel__item">
							<img :src="getImageUrl(slide.image)" />
						</div>
					</slide>

					<template #addons>
						<button
							class="carousel-nav-button carousel-nav-button__left"
							@click="prevSlideProduction"
						>
							<img src="../assets/images/arrow-left.svg" />
						</button>
						<button
							class="carousel-nav-button carousel-nav-button__right"
							@click="nextSlideProduction"
						>
							<img src="../assets/images/arrow-right.svg" />
						</button>
					</template>
				</Carousel>
			</div>
		</div>

		<div class="main-view__text-section main-view__text-section--narrow">
			<p v-html="t('main.main-text-4')"></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { onMounted, ref } from 'vue';
	import { useTranslation, calculateMediaQueryMax } from '@/utils';
	import 'vue3-carousel/dist/carousel.css';
	import { Carousel, Slide, Navigation } from 'vue3-carousel';

	const { t } = useTranslation();

	const orchardsCarousel = ref();
	const productionCarousel = ref();
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

	const carouselVisibleItems = ref<number>();

	const getImageUrl = (name: string) => {
		return new URL(`../assets/images/${name}`, import.meta.url).href;
	};

	const nextSlideOrchards = () => {
		orchardsCarousel.value.next();
	};

	const prevSlideOrchards = () => {
		orchardsCarousel.value.prev();
	};

	const nextSlideProduction = () => {
		productionCarousel.value.next();
	};

	const prevSlideProduction = () => {
		productionCarousel.value.prev();
	};

	window.matchMedia('screen and (max-width: 600px)').onchange = (e) => {
		carouselVisibleItems.value = e.matches ? 1.3 : 3.5;
	};

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
			font-size: 4rem;
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

			#{$parent}__orchards-carousel,
			#{$parent}__production-carousel {
				margin: 0 -10rem;
			}
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

		.carousel {
			&__item {
				img {
					max-width: 95%;
					border-radius: 1.2rem;
				}
			}

			&__icon {
				fill: white;
			}
		}

		.carousel-nav-button {
			position: absolute;
			top: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 5.6rem;
			height: 5.6rem;
			transform: translateY(-50%);
			border: 1px solid #dddddd;
			border-radius: 100%;
			background-color: #fafafa;

			&__left {
				left: 7rem;
			}

			&__right {
				right: 7rem;
			}
		}

		@media only screen and (max-width: 600px) {
			&__section-wrapper,
			&__text-section {
				padding: 0 1.6rem;
			}

			&__orchards-section,
			&__production-section {
				position: relative;
				height: fit-content;

				#{$parent}__orchards-carousel,
				#{$parent}__production-carousel {
					margin: 0 -1.6rem;
				}
			}

			.carousel-nav-button {
				&__left {
					left: 1rem;
				}

				&__right {
					right: 1rem;
				}
			}
		}
	}
</style>
