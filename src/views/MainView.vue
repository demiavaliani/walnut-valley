<template>
	<div class="main-view" ref="mainView">
		<div class="main-view__media">
			<iframe
				src="https://www.youtube.com/embed/BF_y1SEoldI?si=zmhibHGH9TVzD3t4&amp;playlist=BF_y1SEoldI&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;disablekb=1&amp;iv_load_policy=3&amp;playsinline=1&amp;mute=1"
				title="Walnut Walley - Georgia"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
				class="main-view__video"
			></iframe>
		</div>

		<div class="main-view__text-section">
			<p v-html="t('main.main-text-1')"></p>
		</div>

		<div class="main-view__section-wrapper main-view__orchards-section">
			<p class="main-view__section-title">
				{{ t('main.our-orchards') }}
			</p>

			<p class="main-view__section-subtitle">
				{{ t('main.our-orchards-description') }}
			</p>

			<CarouselWrapper
				:slides="slides"
				:items-to-show="carouselVisibleItems"
				:snap-align="carouselSnapAlign"
			/>
		</div>

		<div
			class="main-view__text-section main-view__text-section--narrow"
			v-html="t('main.main-text-3')"
		/>

		<div class="main-view__section-wrapper main-view__production-section">
			<p class="main-view__section-title">
				{{ t('main.our-production') }}
			</p>

			<p class="main-view__text-section" v-html="t('main.our-production-description')" />
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
			image: 'orchards-3.jpg',
		},
		{
			title: 'Slide #4',
			content: 'Slide 4 content.',
			image: 'orchards-4.jpg',
		},
		{
			title: 'Slide #5',
			content: 'Slide 5 content.',
			image: 'orchards-5.jpg',
		},
	];

	const mainView = ref<HTMLElement | null>(null);
	const carouselVisibleItems = ref(2);
	const carouselSnapAlign = ref();

	useResizeObserver(mainView, (entries) => {
		const { width } = entries[0].contentRect;

		switch (true) {
			case width < 600:
				carouselVisibleItems.value = 1.3;
				carouselSnapAlign.value = 'center-odd';
				break;
			case width > 2800:
				carouselVisibleItems.value = 6;
				carouselSnapAlign.value = 'center-odd';
				break;
			case width > 2000:
				carouselVisibleItems.value = 5;
				carouselSnapAlign.value = 'center-even';
				break;
			default:
				carouselSnapAlign.value = 'center-odd';
		}
	});
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
			position: relative;
			max-width: 100%;
			height: 0;
			padding-bottom: 56.25%;
			overflow: hidden;
		}

		&__video {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
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

		&__orchards-section,
		&__production-section {
			position: relative;
			height: fit-content;
		}

		&__text-section {
			margin: 8rem;
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

		&__production-section {
			margin-bottom: 8rem;

			#{$parent}__text-section {
				margin: 0;
				padding: 0;
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
		}
	}
</style>
