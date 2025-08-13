import type { ContentNavigationItem } from '@nuxt/content';
import type { NavigationTree } from '~/types';

export const mapContentNavigation = (
	navigation: ContentNavigationItem[],
): NavigationTree[] => {
	const navMap = {
		'title': 'label',
		'path': 'to',
	};

	return navigation.map((navLink: ContentNavigationItem) => {
		const link = {} as NavigationTree;
		for (const key in navLink) {
			if (key === 'children') {
				link.children = navLink.children?.length
					? mapContentNavigation(navLink.children)
					: undefined;
				continue;
			}
			if (navLink[key]) {
				link[navMap[key] || key] = navLink[key];
			}
		}
		return link;
	});
};
