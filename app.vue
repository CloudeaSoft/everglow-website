<script setup lang="ts">
	const i18n = useI18n();

	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk
				? `${titleChunk} - ${i18n.t('head.title')}`
				: `${i18n.t('head.fulltitle')} | ${i18n.t('head.fulltitle2')}`;
		},
	});

	useSeoMeta({
		title: '',
		twitterCard: 'summary_large_image',
	});

	defineOgImageComponent('Pergel', {
		title: 'Everglow',
		description: 'Welcome to Everglow no Sekai!',
		headline: 'terraria mod',
		colorMode: 'dark',
		icon: 'lucide:audio-waveform',
		siteName: 'Everglow',
		siteLogo: '/icon.png',
		theme: '#50a5ff',
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
