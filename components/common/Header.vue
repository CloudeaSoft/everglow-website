<script setup lang="ts">
const blurMaskVisible = true;

const mainMenuItemList = [{
    name: 'index',
    text: 'Index',
    link: ''
},{
    name: 'docs',
    text: 'Docs',
    link: ''
},{
    name: 'about',
    text: 'About Us',
    link: ''
}]

const colorMode = useColorMode()

const changeColorMode = (mode: 'light' | 'dark') => {
    colorMode.value = mode
    colorMode.preference = mode
}

const githubLink = 'https://github.com/Solaestas/Everglow'
</script>

<template>
    <header :class="[
        'common-header',
        'transparent',
        blurMaskVisible ? 'blur-mask' : '']">
        <div class="container">
            <div class="logo">
                <NuxtLink to="/">
                    <CommonLogo :size="30" />
                    <div class="logo-text">Everglow</div>
                </NuxtLink>
            </div>
            <div class="main-menu-wrap">
                <div v-for="(item, index) in mainMenuItemList" class="main-menu-wrap-item" :key="index">
                    {{ item.text }}
                </div>
            </div>
            <div class="user-actions">
                <div class="user-actions-item mode">
                    <span class="light" v-show="$colorMode.value === 'light'">
                        <Icon name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                            @click="changeColorMode('dark')" />
                    </span>
                    <span class="dark" v-show="$colorMode.value === 'dark'">
                        <Icon name="line-md:sunny-outline-to-moon-loop-transition" @click="changeColorMode('light')" />
                    </span>
                </div>
                <div class="user-actions-item github">
                    <NuxtLink :to="githubLink" target="_blank">
                        <Icon name="uil:github" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.common-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: var(--everglow-black);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all ease-in-out 220ms;
    -o-transition: all ease-in-out 220ms;
    -moz-transition: all ease-in-out 220ms;
    transition: all ease-in-out 220ms;

    &.transparent {
        background: unset;
        -webkit-backdrop-filter: unset;
        backdrop-filter: unset;
    }

    &.blur-mask::before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--everglow-trans-white-3);
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(50px);
    }

    .container {
        position: relative;
        height: 64px;
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
        padding: 0 40px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -moz-box-orient: horizontal;
        -moz-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;

        .logo {
            display: flex;
            align-items: center;

            a {
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
            }

            .logo-text {
                padding-left: 10px;
                font-size: 20px;
                font-family: 'Courier New', Courier, monospace;
                font-weight: 700;
            }
        }

        .main-menu-wrap {
            display: flex;
            align-items: center;
            font-family: inherit;
            font-weight: 600;
            font-size: 1.1rem;
            column-gap: 3rem;
        }

        .user-actions {
            display: flex;

            column-gap: 1rem;

            .user-actions-item {
                font-size: 20px;

                display: flex;
                align-items: center;

                cursor: pointer;
            }

            .mode {
                .light {
                    color: var(--everglow-red-4);
                }

                .dark {
                    color: var(--everglow-blue-5);
                }
            }
        }
    }
}
</style>