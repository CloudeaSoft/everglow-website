<script setup lang="ts">
	import type { NavItem } from '@nuxt/content';

	const { locale } = useI18n();
	const { data: navigation } = await useAsyncData('navigation', () =>
		fetchContentNavigation(),
	);

	const mapLocaleDocsNavigation = (navigation: NavItem[]): NavItem[] => {
		return navigation
			.find((item) => item._path === '/' + locale.value)
			.children.find((item) => item._path === '/' + locale.value + '/docs')
			.children;
	};

	const navLinks = computed(() => {
		return mapContentNavigation(mapLocaleDocsNavigation(navigation.value));
	});
</script>

<template>
	<div class="common-header-submenu-docs">
		<CommonContentNavigationTree :links="navLinks" />
	</div>
</template>

<style lang="scss" scoped>
	.common-header-submenu-docs {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		background-color: transparent;
		pointer-events: none;
		overflow: hidden;
		padding: 40px;
		visibility: hidden;
		display: none;
		opacity: 0;
	}
</style>
