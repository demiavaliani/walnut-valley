import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import OurCompany from '@/views/OurCompany.vue';
import ContactUs from '@/views/ContactUs.vue';

const routes = [
	{
		path: '/',
		name: 'main',
		component: MainView,
	},
	{
		path: '/our-company',
		name: 'our_company',
		component: OurCompany,
	},
	{
		path: '/contact-us',
		name: 'contact_us',
		component: ContactUs,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
