<script setup lang="ts">
	const i18n = useI18n();
	const route = useRoute();
	useHead({
		title: i18n.t('head.subtitles.news'),
	});

	const { data: page } = await useAsyncData('content', () =>
		queryContent(route.path).findOne(),
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
		<ContentRenderer
			class="markdown"
			:value="page"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.news {
		min-height: 800px;
		padding: 200px 100px;
	}
</style>
