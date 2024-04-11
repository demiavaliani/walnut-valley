import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type SiteLanguages } from '@/types';

export const useSite = defineStore('site', () => {
	return {
		siteLanguage: 'georgian' as keyof SiteLanguages,
	};
});
