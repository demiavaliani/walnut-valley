<template>
	<div class="carousel-wrapper">
		<Carousel
			:items-to-show="itemsToShow"
			:wrap-around="true"
			:mouse-drag="false"
			:snap-align="snapAlign"
			ref="carouselElem"
		>
			<slide v-for="slide in slides" :key="slide">
				<div class="carousel__item">
					<img :src="getImageUrl(slide.image)" />
				</div>
			</slide>

			<template #addons>
				<button class="carousel-wrapper__nav-button-left" @click="prevSlide">
					<img src="../assets/images/arrow-left.svg" />
				</button>
				<button class="carousel-wrapper__nav-button-right" @click="nextSlide">
					<img src="../assets/images/arrow-right.svg" />
				</button>
			</template>
		</Carousel>
	</div>
</template>

<script lang="ts" setup>
	import { onMounted, ref } from 'vue';
	import 'vue3-carousel/dist/carousel.css';
	import { Carousel, Slide, Navigation } from 'vue3-carousel';
	import { calculateMediaQueryMax } from '@/utils';
	import { type CarouselSlide } from '@/types';

	interface CarouselWrapperProps {
		slides: CarouselSlide[];
		itemsToShow: number;
		snapAlign?: 'start' | 'end' | 'center' | 'center-even' | 'center-odd';
	}

	withDefaults(defineProps<CarouselWrapperProps>(), {
		snapAlign: 'center-odd',
	});

	const carouselElem = ref<typeof Carousel | null>(null);

	const getImageUrl = (name: string) => {
		return new URL(`../assets/images/${name}`, import.meta.url).href;
	};

	const nextSlide = () => {
		if (carouselElem.value) {
			carouselElem.value.next();
		}
	};

	const prevSlide = () => {
		if (carouselElem.value) {
			carouselElem.value.prev();
		}
	};
</script>

<style lang="scss">
	.carousel-wrapper {
		margin: 0 -10rem;

		@media only screen and (max-width: 600px) {
			margin: 0 -1.6rem;
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

		&__nav-button-left,
		&__nav-button-right {
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
		}

		&__nav-button-left {
			left: 7rem;

			@media only screen and (max-width: 600px) {
				left: 1rem;
			}
		}

		&__nav-button-right {
			right: 7rem;

			@media only screen and (max-width: 600px) {
				right: 1rem;
			}
		}
	}
</style>
