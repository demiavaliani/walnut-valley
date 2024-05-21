import { defineAsyncComponent } from 'vue';

export const NavBar = defineAsyncComponent(() => import('./NavBar.vue'));
export const WvButton = defineAsyncComponent(() => import('./WvButton.vue'));
export const WvFooter = defineAsyncComponent(() => import('./WvFooter.vue'));
export const CarouselWrapper = defineAsyncComponent(() => import('./CarouselWrapper.vue'));
