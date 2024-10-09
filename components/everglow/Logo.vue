<script setup lang="ts">
const { size = 30 } = defineProps<{
    size: number
}>()
</script>

<template>
    <img src="/icon.png" :width="size" :height="size" alt="Everglow Logo">
</template>