<script setup lang="ts">
const i18n = useI18n()
useHead({
    title: i18n.t('head.subtitles.news'),
})


</script>

<template>
    <div class="news">
        <MilkdownReaderWrapper />
    </div>
</template>

<style lang="scss" scoped>
.news {
    height: 500px;
    padding: 200px 100px;
}
</style>