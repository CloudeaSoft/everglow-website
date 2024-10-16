<script setup lang="ts">
	import type { NavigationTree } from '~/types';

	const route = useRoute();

	const { level, links, defaultOpen } = defineProps({
		level: { type: Number, default: 0 },
		links: { type: Array as PropType<NavigationTree[]>, default: () => [] },
		defaultOpen: {
			type: [Boolean, Number],
			default: undefined,
		},
	});

	const items = computed(() =>
		links?.map((link) => {
			return {
				label: link.label,
				icon: link.icon,
				slot: link.label.toLowerCase(),
				disabled: link.disabled,
				defaultOpen:
					!defaultOpen ||
					(typeof defaultOpen === 'number' && level < defaultOpen) ||
					(link.to && route.path.startsWith(link.to.toString())),
				children: link.children,
			};
		}),
	);
</script>

<template>
	<div class="navigation-accordion">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="navigation-accordion-item"
		>
			<button class="title">
				<Icon
					v-if="item.icon"
					:name="item.icon"
				/>
				<span>{{ item.label }}</span>
				<Icon
					v-if="!item.disabled"
					name="lucide:chevron-right"
				/>
			</button>
			<div class="links">
				<div class="links-container">
					<CommonContentNavigationTree
						:level="level + 1"
						:links="item.children"
						:default-open="defaultOpen"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.navigation-accordion {
		display: flex;
		flex-direction: column;
		width: 100%;

		& > *:not([hidden]) ~ :not([hidden]) {
			margin-top: 1rem;
		}

		.navigation-accordion-item {
			display: flex;
			flex-direction: column;
			width: 100%;

			& > *:not([hidden]) ~ :not([hidden]) {
				margin-top: 1rem;
			}

			button {
				display: flex;
				align-items: center;
				width: 100%;
				gap: 0.5rem;
				color: var(--everglow-font-color-3);
				font-size: 1.33rem;
			}

			.links {
				height: auto;

				.links-container {
					& > nav {
						margin-left: 0.75rem;
						border-style: solid;
						border-width: 0;
						border-left-width: 1px;
						border-color: var(--everglow-trans-black-3);
					}
				}
			}
		}
	}
</style>
