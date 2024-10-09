<script setup lang="ts">
const layout = "desktop-default";

const i18n = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${i18n.t('head.title')}` : `${i18n.t('head.title')}`;
  }
})

useSeoMeta({
  title: '',
  ogTitle: 'Everglow Website',
  description: 'Welcome to Everglow no Sekai!',
  ogDescription: 'Welcome to Everglow no Sekai!',
  ogImage: '/icon.png',
  twitterCard: 'summary_large_image',
})

defineOgImageComponent('BlogPost', {
    title: 'Everglow',
    description: 'Welcome to Everglow no Sekai!',
    theme: '#1025ff',
    colorMode: 'dark',
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