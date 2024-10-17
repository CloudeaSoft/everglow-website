import type { NavItem } from '@nuxt/content';
import type { NavigationTree } from '~/types';

export const mapContentNavigation = (
	navigation: NavItem[],
): NavigationTree[] => {
	const navMap = {
		'title': 'label',
		'_path': 'to',
	};

	return navigation.map((navLink: NavItem) => {
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
