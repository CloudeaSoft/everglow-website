import type { Langs } from '~/types';

export const getDocsNavRequestKey = (locale: Langs): string => {
	return 'navigation_' + locale;
};

export const getMobileDocsNavRequestKey = (locale: Langs): string => {
	return 'navigation_mobile_' + locale;
};
