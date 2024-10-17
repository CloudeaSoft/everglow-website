<script setup lang="ts">
	const i18n = useI18n();

	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk
				? `${titleChunk} - ${i18n.t('head.title')}`
				: `${i18n.t('head.title')}`;
		},
	});

	useSeoMeta({
		title: '',
		twitterCard: 'summary_large_image',
	});

	defineOgImageComponent('BlogPost', {
		title: 'Everglow',
		description: 'Welcome to Everglow no Sekai!',
		colorMode: 'dark',
		icon: 'lucide:waves',
		siteName: 'Everglow',
		siteLogo: '/icon.png',
		theme: '#1025ff',
	});
</script>

<template>
	<div id="everglow">
		<CommonHeader />
		<CommonMain>
			<NuxtPage />
		</CommonMain>
		<CommonFooter />
	</div>
</template>

<style lang="scss">
	@import url('@/assets/css/index.scss');
</style>
