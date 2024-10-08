<script setup lang="ts">
const layout = "desktop-default";

const i18n = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${i18n.t('head.title')}` : `${i18n.t('head.title')}`;
  }
})
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import url('@/assets/css/index.scss');
</style>