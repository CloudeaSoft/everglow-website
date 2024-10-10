<script setup lang="ts">
const i18n = useI18n()
useHead({
    title: i18n.t('head.subtitles.news'),
})

import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
</script>

<template>
    <div class="news">
        <div class="milkdown-wrapper">
            <MilkdownProvider>
                <ProsemirrorAdapterProvider>
                    <MilkdownEditor></MilkdownEditor>
                </ProsemirrorAdapterProvider>
            </MilkdownProvider>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.news {
    height: 500px;
    padding-top: 200px;
}
</style>