<script setup lang="ts">
const layout = "desktop-default";
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import url('@/assets/css/index.scss');
</style>