import { createRouter, createWebHashHistory } from 'vue-router';
import { Views } from '@/constants';
import { MainView, OurCompany, ContactUs, Production, OurOrchards } from '@/views';

const routes = [
	{
		path: '/',
		name: Views.MAIN,
		component: MainView,
	},

	{
		path: '/our-company',
		name: Views.OUR_COMPANY,
		component: OurCompany,
	},
	{
		path: '/contact-us',
		name: Views.CONTACT_US,
		component: ContactUs,
	},
	{
		path: '/production',
		name: Views.PRODUCTION,
		component: Production,
	},
	{
		path: '/our-orchards',
		name: Views.ORCHARDS,
		component: OurOrchards,
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
