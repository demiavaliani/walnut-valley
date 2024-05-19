<template>
	<div v-if="!isMobile" class="navbar">
		<div class="navbar__left">
			<RouterLink :to="{ name: Views.MAIN }">
				<img src="@/assets/images/logo-horizontal.svg" />
			</RouterLink>
		</div>

		<div class="navbar__middle">
			<RouterLink :to="{ name: Views.MAIN }" class="navbar__item">
				{{ t('navbar.main') }}
			</RouterLink>
			<div class="navbar__item-dropdown">
				<button class="navbar__item">
					{{ t('navbar.company') }}
				</button>
				<div class="navbar__item-dropdown-content">
					<RouterLink :to="{ name: Views.OUR_COMPANY }">{{
						t('navbar.company.about-us')
					}}</RouterLink>
					<button>{{ t('navbar.company.our-history') }}</button>
				</div>
			</div>
			<button class="navbar__item">
				{{ t('navbar.production') }}
			</button>
			<button class="navbar__item">
				{{ t('navbar.our-orchards') }}
			</button>
			<button class="navbar__item">
				{{ t('navbar.our-product') }}
			</button>
		</div>

		<div class="navbar__right">
			<button class="navbar__language">
				<img src="@/assets/images/language-globe.svg" />
				<p>{{ siteLanguageFormatted }}</p>
			</button>
			<RouterLink :to="{ name: Views.CONTACT_US }">
				<WvButton :text="t('navbar.contact-us')"></WvButton>
			</RouterLink>
		</div>
	</div>

	<div v-else class="navbar-mobile">
		<RouterLink :to="{ name: Views.MAIN }">
			<img class="navbar-mobile__logo" src="@/assets/images/logo-horizontal.svg" />
		</RouterLink>
		<button @click="isHamburgerOpen = !isHamburgerOpen">
			<img class="navbar-mobile__hamburger" src="@/assets/images/hamburger-menu.svg" />
		</button>

		<div v-if="isHamburgerOpen" class="navbar-mobile__menu">
			<RouterLink :to="{ name: Views.MAIN }" class="navbar-mobile__item">
				{{ t('navbar.main') }}
			</RouterLink>

			<div class="navbar-mobile__item-dropdown">
				<button class="navbar-mobile__item">
					{{ t('navbar.company') }}
				</button>
				<div class="navbar-mobile__item-dropdown-content">
					<RouterLink :to="{ name: Views.OUR_COMPANY }">{{
						t('navbar.company.about-us')
					}}</RouterLink>
					<button>{{ t('navbar.company.our-history') }}</button>
				</div>
			</div>

			<button class="navbar-mobile__item">
				{{ t('navbar.production') }}
			</button>
			<button class="navbar-mobile__item">
				{{ t('navbar.our-orchards') }}
			</button>
			<button class="navbar-mobile__item">
				{{ t('navbar.our-product') }}
			</button>

			<div class="navbar-mobile__bottom">
				<button class="navbar-mobile__language">
					<img src="@/assets/images/language-globe.svg" />
					<p>{{ siteLanguageFormatted }}</p>
				</button>
				<RouterLink :to="{ name: Views.CONTACT_US }">
					<WvButton :text="t('navbar.contact-us')"></WvButton>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed, onMounted } from 'vue';
	import { useSite } from '@/stores/site';
	import { useTranslation } from '@/utils/translations';
	import WvButton from './WvButton.vue';
	import { calculateMediaQueryMax } from '@/utils/mediaQuery';
	import { Views } from '@/constants';

	const store = useSite();
	const { t } = useTranslation();

	const isMobile = ref(false);
	const isHamburgerOpen = ref(false);

	const siteLanguageFormatted = computed(() => store.siteLanguage.slice(0, 3).toUpperCase());

	window.matchMedia(`screen and (max-width: 1000px)`).onchange = (e) => {
		isMobile.value = e.matches;
	};

	onMounted(() => (isMobile.value = calculateMediaQueryMax(1000)));
</script>

<style lang="scss">
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: fit-content;
		padding: 1rem 10rem;
		font-size: 1.4rem;
		background-color: #ffffff;

		&__left {
			display: flex;
			justify-content: center;

			img {
				width: 18rem;
			}
		}

		&__middle {
			display: flex;
		}

		&__item {
			position: relative;
			text-align: center;
			color: #222222;
			opacity: 60%;
			font-weight: $wv-fw-regular;
			line-height: 2rem;

			&:hover {
				color: #6c7340;
				opacity: 1;

				&::after {
					content: '';
					position: absolute;
					left: 0;
					right: 0;
					bottom: -0.4rem;
					width: 60%;
					margin-left: auto;
					margin-right: auto;
					border-bottom: 2px solid #6c7340;
					border-radius: 1rem;
				}
			}
		}

		&__item-dropdown {
			position: relative;

			&:hover {
				.navbar__item-dropdown-content {
					height: 6rem;
					padding-bottom: 1rem;
				}
			}
		}

		&__item-dropdown-content {
			position: absolute;
			box-sizing: content-box;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			width: max-content;
			height: 0;
			padding: 2rem 1rem 0rem;
			border-radius: 0.3rem;
			background-color: white;
			transition: height 0.1s linear;

			& * {
				overflow: hidden;
				line-height: 2rem;
				color: #222222;
				opacity: 60%;

				&:hover {
					color: #6c7340;
					opacity: 1;
				}
			}
		}

		&__right {
			display: flex;
			justify-content: center;
			gap: 1.6rem;
		}

		&__language {
			align-items: center;
			gap: 1rem;
			font-size: 1.4rem;

			&:hover {
				color: #6c7340;
			}
		}

		@media only screen and (min-width: 1000px) {
			padding: 1rem 4rem;

			&__item {
				margin: 0 1rem;
			}
		}

		@media only screen and (min-width: 1125px) {
			padding: 1rem 5rem;

			&__item {
				margin: 0 2rem;
			}

			&__item-dropdown-content {
				left: 1rem;
			}
		}

		@media only screen and (min-width: 1325px) {
			padding: 1rem 10rem;

			&__item {
				margin: 0 3rem;
			}

			&__item-dropdown-content {
				left: 2rem;
			}
		}
	}

	.navbar-mobile {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: fit-content;
		width: 100%;
		padding: 1rem 2rem;
		background-color: #ffffff;
		font-size: 1.4rem;

		&__hamburger {
			width: 3rem;
		}

		&__menu {
			position: absolute;
			top: 100%;
			left: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 3rem;
			width: 100%;
			padding: 3rem 0;
			background-color: #ffffff;
			box-shadow: 0px 10px 30px -30px rgba(66, 68, 90, 1);
			z-index: 2;
		}

		&__item {
			position: relative;
			justify-content: center;
			align-items: center;
			color: #222222;
			opacity: 60%;
			font-weight: $wv-fw-regular;
			line-height: 2rem;
			z-index: 1;

			&:hover {
				color: #6c7340;
				opacity: 1;
			}
		}

		&__item-dropdown {
			position: relative;

			&:hover {
				.navbar-mobile__item-dropdown-content {
					display: flex;
				}
			}
		}

		&__item-dropdown-content {
			position: absolute;
			top: 0;
			display: none;
			flex-direction: column;
			gap: 1rem;
			width: max-content;
			padding-left: calc(100% + 5rem);

			& * {
				line-height: 2rem;
				color: #222222;
				opacity: 60%;

				&:hover {
					color: #6c7340;
					opacity: 1;
				}
			}

			&:hover {
				display: flex;
			}
		}

		&__bottom {
			display: flex;
			justify-content: center;
			gap: 1.6rem;
		}

		&__language {
			align-items: center;
			gap: 1rem;
			font-size: 1.6rem;

			&:hover {
				color: #6c7340;
			}
		}
	}
</style>
