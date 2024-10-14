<script setup lang="ts">
	import type { News } from '~/types/news';

	const i18n = useI18n();
	const route = useRoute();
	useHead({
		title: i18n.t('head.subtitles.news'),
	});

	const { data: page } = await useAsyncData('content', () =>
		queryContent<News>(route.path).findOne(),
	);
	if (!page.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found',
			fatal: true,
		});
	}
</script>

<template>
	<div class="news">
		<div class="news-head">
			{{ page.title }}
		</div>
		<div class="news-body">
			<ContentRenderer
				class="markdown"
				:value="page"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.news {
		min-height: 800px;
		margin: 200px 100px;

		.news-head {
		}

		.news-body {
		}
	}
</style>
