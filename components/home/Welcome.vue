<script setup lang="ts">
const config = useRuntimeConfig()
const colorModeCookie = useCookie(config.public.colorModeStorageKey)
const bg = ref<string>(colorModeCookie.value === 'light' ? '/images/light-sky.jpg' : '/images/star-sky.jpg');

watch(useColorMode(), (newIns, oldIns) => {
    bg.value = useColorMode().value === 'light' ? '/images/light-sky.jpg' : '/images/star-sky.jpg'
})
</script>

<template>
    <HomeParallexScrollBase :src="bg">
        <div class="home-welcome">
            <section class="parallex-scroll">
                <div>This website is still work in progress.</div>
                <NuxtLink href="https://github.com/Solaestas/Everglow" target="_blank">
                    <div class="git-link">
                        Go to everglow github page
                    </div>
                </NuxtLink>
            </section>
        </div>
    </HomeParallexScrollBase>
</template>

<style lang="scss" scoped>
.git-link {
    margin-top: 10px;
    font-size: 1.125rem;
    font-weight: 600;
    border: 2px solid var(--everglow-black);
    border-radius: 3px;
    padding: 5px;

    &:hover {
        border-color: var(--everglow-blue-5);
        color: var(--everglow-blue-5);
    }
}
</style>
