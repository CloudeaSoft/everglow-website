<script setup lang="ts">
	const route = useRoute();
	const i18n = useI18n();
	useHead({
		title: i18n.t('head.subtitles.news'),
	});

	const { data: list } = await useAsyncData(route.path, () =>
		queryCollection('content')
			.where('path', 'LIKE', route.path + '%')
			.order('date', 'DESC')
			.all(),
	);
</script>

<template>
	<div class="news">
		<NewsList>
			<NewsItem
				v-for="(item, index) in list"
				:key="index"
				:news-item="item"
			/>
		</NewsList>
	</div>
</template>

<style lang="scss" scoped>
	.news {
		padding: 100px 100px;
	}

	@media only screen and (max-width: 833px) {
		.news {
			padding: 100px 30px;
		}
	}
</style>
