import { defineStore } from 'pinia';
import { SiteLanguages } from '@/types';
import { useSessionStorage } from '@vueuse/core';

export const useSite = defineStore('site', () => {
	return {
		siteLanguage: useSessionStorage('language', 'georgian' as keyof typeof SiteLanguages),
	};
});
