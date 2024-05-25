import { defineAsyncComponent } from 'vue';

export const MainView = defineAsyncComponent(() => import('./MainView.vue'));
export const OurCompany = defineAsyncComponent(() => import('./OurCompany.vue'));
export const Production = defineAsyncComponent(() => import('./Production.vue'));
export const ContactUs = defineAsyncComponent(() => import('./ContactUs.vue'));
export const OurOrchards = defineAsyncComponent(() => import('./OurOrchards.vue'));
export const Dzalisi = defineAsyncComponent(() => import('./Dzalisi.vue'));
