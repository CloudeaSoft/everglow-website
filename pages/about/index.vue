<script setup lang="ts">
	const i18n = useI18n();
	useHead({
		title: i18n.t('head.subtitles.about'),
	});
</script>

<template>
	<div class="about" />
</template>

<style lang="scss" scoped>
	.about {
		height: 500px;
	}
</style>
