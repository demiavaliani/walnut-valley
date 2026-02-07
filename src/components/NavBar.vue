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
			<RouterLink :to="{ name: Views.OUR_COMPANY }" class="navbar__item">
				{{ t('navbar.company.about-us') }}
			</RouterLink>
			<RouterLink :to="{ name: Views.ORCHARDS }" class="navbar__item">
				{{ t('navbar.our-orchards') }}
			</RouterLink>
			<RouterLink :to="{ name: Views.OUR_PRODUCTS }" class="navbar__item">
				{{ t('navbar.our-products') }}
			</RouterLink>
			<RouterLink :to="{ name: Views.PRODUCTION }" class="navbar__item">
				{{ t('navbar.production') }}
			</RouterLink>
		</div>

		<div class="navbar__right">
			<div class="navbar__language-dropdown" @click="onLanguageClick">
				<button class="navbar__language">
					<img src="@/assets/images/language-globe.svg" />
					<p>{{ siteLanguageFormatted }}</p>
				</button>
				<div
					:class="[
						'navbar__language-dropdown-content',
						{ 'navbar__language-dropdown-content--open': isLanguageDropdownOpen },
					]"
				>
					<button v-for="language in siteLanguages" @click="updateSiteLanguage(language.full)">
						{{ language.short }}
					</button>
				</div>
			</div>
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
			<RouterLink :to="{ name: Views.OUR_COMPANY }" class="navbar-mobile__item">
				{{ t('navbar.company.about-us') }}
			</RouterLink>
			<RouterLink :to="{ name: Views.ORCHARDS }" class="navbar-mobile__item">
				{{ t('navbar.our-orchards') }}
			</RouterLink>
			<RouterLink :to="{ name: Views.OUR_PRODUCTS }" class="navbar-mobile__item">
				{{ t('navbar.our-products') }}
			</RouterLink>
			<RouterLink :to="{ name: Views.PRODUCTION }" class="navbar-mobile__item">
				{{ t('navbar.production') }}
			</RouterLink>

			<div class="navbar-mobile__bottom">
				<div class="navbar-mobile__language-dropdown" @click="onLanguageClick">
					<button class="navbar-mobile__language">
						<img src="@/assets/images/language-globe.svg" />
						<p>{{ siteLanguageFormatted }}</p>
					</button>
					<div
						:class="[
							'navbar__language-dropdown-content',
							{ 'navbar__language-dropdown-content--open': isLanguageDropdownOpen },
						]"
					>
						<button v-for="language in siteLanguages" @click="updateSiteLanguage(language.full)">
							{{ language.short }}
						</button>
					</div>
				</div>

				<RouterLink :to="{ name: Views.CONTACT_US }">
					<WvButton :text="t('navbar.contact-us')"></WvButton>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed, onMounted, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import { useSite } from '@/stores/site';
	import { useTranslation } from '@/utils/translations';
	import { WvButton } from './index';
	import { calculateMediaQueryMax } from '@/utils/mediaQuery';
	import { Views } from '@/constants';
	import { SiteLanguages } from '@/types';

	const store = useSite();
	const { t } = useTranslation();
	const route = useRoute();

	const isMobile = ref(false);
	const isHamburgerOpen = ref(false);
	const isLanguageDropdownOpen = ref(false);

	const siteLanguages = computed(() => {
		const arr: Array<{ short: keyof typeof SiteLanguages; full: keyof typeof SiteLanguages }> = [];

		Object.keys(SiteLanguages).map((language) => {
			arr.push({
				short: language.slice(0, 3).toUpperCase() as keyof typeof SiteLanguages,
				full: language as keyof typeof SiteLanguages,
			});
		});

		return arr.filter((item) => item.short != siteLanguageFormatted.value);
	});

	const siteLanguageFormatted = computed(() => store.siteLanguage.slice(0, 3).toUpperCase());

	const onLanguageClick = () => (isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value);

	const updateSiteLanguage = (language: keyof typeof SiteLanguages) => {
		store.siteLanguage = language;
		location.reload();
	};

	watch(route, () => {
		if (isHamburgerOpen.value) {
			isHamburgerOpen.value = false;
		}
	});

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

		&__language-dropdown {
			position: relative;
			display: flex;
		}

		&__language-dropdown-content {
			position: absolute;
			top: 4.5rem;
			left: 1rem;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			width: 7rem;
			height: 0;
			padding-left: 2rem;
			border-radius: 0.3rem;
			background-color: white;
			transition: height 0.1s linear;
			overflow: hidden;
			z-index: 999;

			& * {
				line-height: 2rem;
				color: #222222;

				&:hover {
					color: #6c7340;
				}
			}

			&--open {
				height: 3rem;
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
		}

		@media only screen and (min-width: 1325px) {
			padding: 1rem 10rem;

			&__item {
				margin: 0 3rem;
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

		&__language-dropdown {
			position: relative;
			display: flex;
			font-size: 1.6rem;
		}
	}
</style>
