<script setup lang="ts">
	import type { PropType } from 'vue';
	import type { TocLink } from '@nuxt/content';

	const { title, links } = defineProps({
		title: {
			type: String,
			default: 'Table of Contents',
		},
		links: {
			type: Array as PropType<TocLink[]>,
			default: () => [],
		},
	});

	const open = ref(false);
</script>

<template>
	<nav class="content-toc-wrapper">
		<div class="content-toc-container">
			<slot name="top" />

			<button
				v-if="links?.length"
				class="content-toc-button"
				tabindex="-1"
				@click="open = !open"
			>
				<span class="content-toc-button-label">{{ title }}</span>
			</button>

			<CommonPageContentTocLinks
				:links="links"
				:class="['lg:block', open ? '' : 'hidden']"
			/>

			<slot name="bottom" />
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	.content-toc-wrapper {
		position: sticky;
		backdrop-filter: blur(8px);
		padding: 0 1rem;
		max-height: calc(100vh - var(--header-height));

		.content-toc-container {
			padding-bottom: 2rem;

			.content-toc-button {
				user-select: text;
				cursor: text;
				align-items: center;
				width: 100%;

				display: flex;
				text-transform: none;

				color: var(--everglow-font-color-3);

				.content-toc-button-label {
					font-weight: 600;
					font-size: 1.33rem;
					line-height: 2rem;

					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
