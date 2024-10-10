<script setup lang="ts">
import type { NewsProps } from '~/types/news';

const { title = 'Title', abstract = 'abstract' } = defineProps<NewsProps>()
</script>

<template>
    <li class="news-item">
        <div class="news-item-content">
            <h1 class="news-item-header">{{ title }}</h1>
            <div class="news-item-body">
                {{ abstract }}
            </div>
            <div class="news-item-footer">
                {{ date.toLocaleString('zh-CN') }}
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.news-item {
    display: flex;
    width: 100%;
    max-width: 800px;
    height: 200px;
    margin-top: 40px;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--everglow-white);
    border: 1px solid var(--everglow-black);

    animation: appear 1s linear forwards,
        disappear 1s linear forwards;
    animation-timeline: view();
    animation-range: entry, exit;

    &:first-child {
        margin-top: 0;
    }

    .news-item-content {
        display: flex;
        flex-direction: column;

        width: 100%;

        padding: 20px 30px;

        .news-item-header {
            height: 40px;
        }

        .news-item-body {
            flex: 1;
        }

        .news-item-footer {
            height: 40px;
        }
    }
}


@keyframes appear {
    from {
        opacity: 0;
        transform: scaleX(0.6);
    }

    to {
        opacity: 1;
        transform: scaleX(1);
    }
}

@keyframes disappear {
    to {
        opacity: 0;
        transform: scaleX(0.6);
    }

    from {
        opacity: 1;
        transform: scaleX(1);
    }
}
</style>