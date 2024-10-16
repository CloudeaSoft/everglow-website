<script setup lang="ts">
	const i18n = useI18n();
	useHead({
		title: i18n.t('head.subtitles.about'),
	});
</script>

<template>
	<div class="about">about page</div>
</template>

<style lang="scss" scoped>
	.about {
		height: 1000px;
		margin-top: var(--header-height);
	}
</style>
