import { defineAsyncComponent } from 'vue';

export const MainView = () => import('./MainView.vue');
export const OurCompany = () => import('./OurCompany.vue');
export const Production = () => import('./Production.vue');
export const ContactUs = () => import('./ContactUs.vue');
export const OurOrchards = () => import('./OurOrchards.vue');
export const OurProducts = () => import('./OurProducts.vue');
