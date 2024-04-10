import { defineStore } from 'pinia';
import { SiteLanguages } from '@/types';

export const useSite = defineStore('site', () => {
	return {
		siteLanguage: 'georgian' as keyof typeof SiteLanguages,
	};
});
