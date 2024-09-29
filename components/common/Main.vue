<template>
    <main class="common-main-container">
        <slot />
    </main>
</template>

<style lang="scss">
.common-main-container {
    height: 2000px;
    background: url('@/public/bg.jpg');
    background-size: cover;
}
</style>