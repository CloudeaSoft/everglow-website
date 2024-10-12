<script setup lang="ts">
const i18n = useI18n();
useHead({
	title: i18n.t('head.subtitles.wiki'),
});
</script>

<template>
	<div class="wiki"></div>
</template>

<style lang="scss" scoped>
.wiki {
	height: 500px;
}
</style>
