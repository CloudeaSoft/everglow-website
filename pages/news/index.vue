<script setup lang="ts">
import type { NewsProps } from '~/types/news';

const i18n = useI18n();
useHead({
	title: i18n.t('head.subtitles.news'),
});

const newsList: NewsProps[] = [
	{
		title: 'Title1',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title2',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title3',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title4',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title5',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title6',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title7',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title8',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
	{
		title: 'Title9',
		abstract: 'Content...........',
		date: new Date(1728552377570),
	},
];

const list = await queryContent('/news').find();
</script>

<template>
	<div class="news">
		<NewsList>
			<NewsItem
				v-for="(item, index) in newsList"
				:key="index"
				:title="item.title"
				:abstract="item.abstract"
				:date="item.date"
			/>
		</NewsList>
	</div>
</template>

<style lang="scss" scoped>
.news {
	padding: 100px 100px;
}
</style>
