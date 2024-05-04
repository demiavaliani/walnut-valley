<template>
	<div v-if="!isMobile" class="wv-footer">
		<div class="wv-footer__column wv-footer__column-one">
			<img src="@/assets/images/logo-horizontal.svg" />

			<p>{{ t('footer.description') }}</p>
		</div>

		<div class="wv-footer__column wv-footer__column-two">
			<RouterLink :to="{ name: Views.MAIN }" class="wv-footer__nav-item">
				{{ t('navbar.main') }}
			</RouterLink>

			<div class="wv-footer__company-item-dropdown">
				<button class="wv-footer__company-item">
					{{ t('navbar.company') }}
				</button>

				<div class="wv-footer__company-item-dropdown-content">
					<RouterLink :to="{ name: Views.OUR_COMPANY }" class="wv-footer__nav-item">
						{{ t('navbar.company.about-us') }}
					</RouterLink>

					<button class="wv-footer__nav-item">{{ t('navbar.company.our-history') }}</button>
				</div>
			</div>

			<button class="wv-footer__nav-item">
				{{ t('navbar.production') }}
			</button>

			<button class="wv-footer__nav-item">
				{{ t('navbar.our-orchards') }}
			</button>

			<button class="wv-footer__nav-item">
				{{ t('navbar.our-product') }}
			</button>
		</div>

		<div class="wv-footer__column wv-footer__column-three">
			<div class="wv-footer__contacts-item">
				<div class="wv-footer__contacts-item-icon-wrapper">
					<img src="@/assets/images/email-icon.svg" />
				</div>
				<p>info@wv.ge</p>
			</div>

			<div class="wv-footer__contacts-item">
				<div class="wv-footer__contacts-item-icon-wrapper">
					<img src="@/assets/images/location-icon.svg" />
				</div>
				<p>Tskaltubo street 29, Tbilisi, Georgia</p>
			</div>

			<div class="wv-footer__contacts-item">
				<div class="wv-footer__contacts-item-icon-wrapper">
					<img src="@/assets/images/phone-icon.svg" />
				</div>
				<p>+995 579 33 66 08</p>
			</div>
		</div>

		<div class="wv-footer__column wv-footer__column-four">
			<button class="wv-footer__social-item">
				<img class="wv-footer__social-item-icon" src="@/assets/images/facebook-icon.svg" />
			</button>
			<button class="wv-footer__social-item">
				<img class="wv-footer__social-item-icon" src="@/assets/images/instagram-icon.svg" />
			</button>
		</div>
	</div>

	<div v-else class="wv-footer-mobile">
		<div class="wv-footer-mobile__column wv-footer-mobile__column-one">
			<img src="@/assets/images/logo-horizontal.svg" />

			<p>{{ t('footer.description') }}</p>
		</div>

		<div class="wv-footer-mobile__column wv-footer-mobile__column-two">
			<RouterLink :to="{ name: Views.MAIN }" class="wv-footer-mobile__nav-item">
				{{ t('navbar.main') }}
			</RouterLink>

			<div class="wv-footer-mobile__company-item-dropdown">
				<button class="wv-footer-mobile__company-item">
					{{ t('navbar.company') }}
				</button>

				<div class="wv-footer-mobile__company-item-dropdown-content">
					<RouterLink :to="{ name: Views.OUR_COMPANY }" class="wv-footer-mobile__nav-item">
						{{ t('navbar.company.about-us') }}
					</RouterLink>

					<button class="wv-footer-mobile__nav-item">{{ t('navbar.company.our-history') }}</button>
				</div>
			</div>

			<button class="wv-footer-mobile__nav-item">
				{{ t('navbar.production') }}
			</button>

			<button class="wv-footer-mobile__nav-item">
				{{ t('navbar.our-orchards') }}
			</button>

			<button class="wv-footer-mobile__nav-item">
				{{ t('navbar.our-product') }}
			</button>
		</div>

		<div class="wv-footer-mobile__column wv-footer-mobile__column-three">
			<div class="wv-footer-mobile__contacts-item">
				<div class="wv-footer-mobile__contacts-item-icon-wrapper">
					<img src="@/assets/images/email-icon.svg" />
				</div>
				<p>info@wv.ge</p>
			</div>

			<div class="wv-footer-mobile__contacts-item">
				<div class="wv-footer-mobile__contacts-item-icon-wrapper">
					<img src="@/assets/images/location-icon.svg" />
				</div>
				<p>Tskaltubo street 29, Tbilisi, Georgia</p>
			</div>

			<div class="wv-footer-mobile__contacts-item">
				<div class="wv-footer-mobile__contacts-item-icon-wrapper">
					<img src="@/assets/images/phone-icon.svg" />
				</div>
				<p>+995 579 33 66 08</p>
			</div>
		</div>

		<div class="wv-footer-mobile__column wv-footer-mobile__column-four">
			<button class="wv-footer-mobile__social-item">
				<img class="wv-footer-mobile__social-item-icon" src="@/assets/images/facebook-icon.svg" />
			</button>
			<button class="wv-footer-mobile__social-item">
				<img class="wv-footer-mobile__social-item-icon" src="@/assets/images/instagram-icon.svg" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';
	import { useTranslation } from '@/utils/translations';
	import { calculateMediaQueryMax } from '@/utils/mediaQuery';
	import { Views } from '@/constants';

	const { t } = useTranslation();

	const isMobile = ref(false);
	window.matchMedia(`screen and (max-width: 600px)`).onchange = (e) => {
		isMobile.value = e.matches;
	};

	onMounted(() => (isMobile.value = calculateMediaQueryMax(600)));
</script>

<style lang="scss">
	.wv-footer {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-self: flex-end;
		gap: 5rem;
		width: 100%;
		padding: 2rem;
		background-color: #fafafa;

		&__column {
			font-weight: $wv-fw-regular;
		}

		&__column-one {
			flex-grow: 1;
			font-size: 1.4rem;
			line-height: 2.4rem;

			@media only screen and (min-width: 1001px) {
				img {
					width: 18rem;
				}
			}
		}

		&__column-two {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.2rem;
			font-size: 1.6rem;
		}

		&__nav-item {
			line-height: 2.4rem;
			color: #222222;
			z-index: 1;

			&:hover {
				color: #6c7340;
			}
		}

		&__company-item {
			position: relative;
			text-align: left;
			color: #222222;
			line-height: 2.4rem;
			z-index: 1;

			&:hover {
				color: #6c7340;
			}
		}

		&__company-item-dropdown {
			position: relative;

			&:hover {
				.wv-footer__company-item-dropdown-content {
					display: flex;
				}
			}
		}

		&__company-item-dropdown-content {
			position: absolute;
			top: 0;
			display: none;
			flex-direction: column;
			gap: 1.2rem;
			width: max-content;
			padding-left: 12rem;

			& * {
				line-height: 2.4rem;
				color: #222222;

				&:hover {
					color: #6c7340;
				}
			}
		}

		&__column-three {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
			font-size: 1.6rem;
		}

		&__contacts-item {
			display: flex;
			gap: 1rem;
			color: #222222;
			line-height: 2.4rem;
		}

		&__contacts-item-icon-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.6rem;
		}

		&__column-four {
			display: flex;
			justify-content: center;
			gap: 1.4rem;
		}

		&__social-item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 1.2rem;
			background-color: #ececec80;
		}

		&__social-item-icon {
			opacity: 1;
		}

		@media only screen and (min-width: 600px) {
			gap: 3rem;
			padding: 2rem 4rem;
		}

		@media only screen and (min-width: 1000px) {
			gap: 7rem;
		}

		@media only screen and (min-width: 1110px) {
			gap: 10rem;
			padding: 2rem 5rem;
		}

		@media only screen and (min-width: 1310px) {
			padding: 2rem 10rem;
		}
	}

	.wv-footer-mobile {
		display: flex;
		flex-direction: column;
		align-self: flex-end;
		width: 100%;
		padding: 2rem;
		background-color: #fafafa;

		&__column {
			font-weight: $wv-fw-regular;
		}

		&__column-one {
			margin-bottom: 2.4rem;
			font-size: 1.4rem;
			line-height: 2.4rem;
		}

		&__column-two {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.2rem;
			margin-bottom: 2.4rem;
			font-size: 1.6rem;
		}

		&__nav-item {
			line-height: 2.4rem;
			color: #222222;
			z-index: 1;

			&:hover {
				color: #6c7340;
			}
		}

		&__company-item {
			position: relative;
			text-align: left;
			color: #222222;
			line-height: 2.4rem;
			z-index: 1;

			&:hover {
				color: #6c7340;
			}
		}

		&__company-item-dropdown {
			position: relative;

			&:hover {
				.wv-footer-mobile__company-item-dropdown-content {
					display: flex;
				}
			}
		}

		&__company-item-dropdown-content {
			position: absolute;
			top: 0;
			display: none;
			flex-direction: column;
			gap: 1.2rem;
			width: max-content;
			padding-left: 12rem;

			& * {
				line-height: 2.4rem;
				color: #222222;

				&:hover {
					color: #6c7340;
				}
			}
		}

		&__column-three {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
			margin-bottom: 2.4rem;
			font-size: 1.6rem;
		}

		&__contacts-item {
			display: flex;
			gap: 1rem;
			color: #222222;
			line-height: 2.4rem;
		}

		&__contacts-item-icon-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.6rem;
		}

		&__column-four {
			display: flex;
			gap: 1.4rem;
		}

		&__social-item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 1.2rem;
			background-color: #ececec80;
		}

		&__social-item-icon {
			opacity: 1;
		}
	}
</style>
