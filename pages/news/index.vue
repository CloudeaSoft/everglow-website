<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

const i18n = useI18n();
useHead({
	title: i18n.t('head.subtitles.news'),
});

const list = await queryContent('/news').find();

const compareDate = (a: ParsedContent, b: ParsedContent) => {
	if (a.date < b.date) return 1;
	else if (a.date > b.date) return -1;
	else return 0;
};
list.sort(compareDate);
</script>

<template>
	<div class="news">
		<NewsList>
			<NewsItem
				v-for="(item, index) in list"
				:key="index"
				:title="item.title"
				:description="item.description"
				:date="new Date(item.date)"
				:path="`${item._path}`"
			/>
		</NewsList>
	</div>
</template>

<style lang="scss" scoped>
.news {
	padding: 100px 100px;
}
</style>
