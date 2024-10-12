<script setup lang="ts">
const i18n = useI18n();
const route = useRoute();
useHead({
	title: i18n.t('head.subtitles.news'),
});

const { data } = await useAsyncData('hello', () =>
	queryContent(`/news/${route.params.path}`).findOne(),
);
</script>

<template>
	<div class="news">
		<ContentRenderer class="markdown" :value="data" />
	</div>
</template>

<style lang="scss" scoped>
.news {
	min-height: 800px;
	padding: 200px 100px;
}
</style>
