<script setup lang="ts">
	import type { NavItem } from '@nuxt/content';

	const { locale } = useI18n();

	const { subMenuVisible } = defineProps({
		subMenuVisible: Boolean,
	});

	const emit = defineEmits(['return', 'navigate']);

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
	<div
		:class="['common-header-submenu-docs', subMenuVisible ? 'active' : 'hide']"
	>
		<Icon
			class="return-btn"
			style="color: white"
			name="lucide:chevron-left"
			@click="emit('return')"
		>
		</Icon>
		<CommonContentNavigationTree
			:links="navLinks"
			@click="emit('navigate')"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.common-header-submenu-docs {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		background-color: transparent;
		pointer-events: none;
		overflow: hidden;
		padding: 40px;

		.return-btn {
			width: 30px;
			height: 30px;
			margin: 0 0 20px;
			transition: color 0.3s ease;
			&:hover * {
				color: var(--everglow-blue-5);
			}
		}
	}

	@media only screen and (max-width: 833px) {
		.common-header-submenu-docs {
			&.hide {
				visibility: hidden;
				display: none;
				opacity: 0;
			}

			&.active {
				visibility: visible;
				display: block;
				opacity: 1;
				pointer-events: all;
			}
		}
	}
</style>
