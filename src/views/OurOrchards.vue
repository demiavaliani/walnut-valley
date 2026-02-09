<template>
	<div class="our-orchards" ref="ourOrchardsView">
		<div class="our-orchards__body">
			<p class="our-orchards__body-title">{{ t('our-orchards.body-title') }}</p>

			<div class="our-orchards__text">
				<p v-html="t('our-orchards.body-text-1')"></p>
			</div>

			<div class="our-orchards__carousel-wrapper">
				<CarouselWrapper
					:slides="slides"
					:items-to-show="carouselVisibleItems"
					:snap-align="carouselSnapAlign"
				/>
			</div>

			<p class="our-orchards__harvest-title">{{ t('our-orchards.harvest.title') }}</p>

			<div class="our-orchards__text">
				<p>{{ t('our-orchards.harvest.subtitle') }}</p>
			</div>

			<div
				class="our-orchards__text our-orchards__table"
				v-html="t('our-orchards.harvest.table')"
			></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { useTranslation } from '@/utils';
	import { CarouselWrapper, WvButton } from '@/components';
	import { useResizeObserver } from '@vueuse/core';

	const { t } = useTranslation();

	const slides = [
		{
			title: 'Slide #1',
			content: 'Slide 1 content.',
			image: 'orchards-1.jpg',
		},
		{
			title: 'Slide #2',
			content: 'Slide 2 content.',
			image: 'orchards-2.jpg',
		},
		{
			title: 'Slide #3',
			content: 'Slide 3 content.',
			image: 'walnut-1.jpg',
		},
		{
			title: 'Slide #4',
			content: 'Slide 4 content.',
			image: 'orchards-3.jpg',
		},
		{
			title: 'Slide #5',
			content: 'Slide 5 content.',
			image: 'orchards-4.jpg',
		},
		{
			title: 'Slide #6',
			content: 'Slide 6 content.',
			image: 'walnut-7.jpg',
		},
		{
			title: 'Slide #7',
			content: 'Slide 7 content.',
			image: 'orchards-5.jpg',
		},
	];

	const ourOrchardsView = ref<HTMLElement | null>(null);
	const carouselVisibleItems = ref(2);
	const carouselSnapAlign = ref();

	useResizeObserver(ourOrchardsView, (entries) => {
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
	.our-orchards {
		&__body {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 8rem 0;
		}

		&__body-title,
		&__harvest-title {
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

		&__table {
			color: #222222;
		}

		&__carousel-wrapper {
			margin: 8rem 0;
			padding: 0 10rem;

			@media only screen and (max-width: 600px) {
				padding: 0 1.6rem;
			}
		}

		&__harvest-title {
			margin-top: 8rem;
			padding: 0 2rem;
			text-align: center;
		}
	}
</style>
