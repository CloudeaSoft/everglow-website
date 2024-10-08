<script setup lang="ts">
const blurMaskVisible = () => true;
const menuListVisible = ref<boolean>(false);
const localePath = useLocalePath()

const openMenu = () => {
    menuListVisible.value = true;
    document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
    menuListVisible.value = false;
    document.body.style.overflow = 'auto'
}

const mainMenuItemList = [{
    name: 'home',
    link: '/'
}, {
    name: 'news',
    link: '/news'
}, {
    name: 'wiki',
    link: '/wiki'
}, {
    name: 'docs',
    link: '/docs'
}, {
    name: 'about',
    link: '/about'
}]

const colorMode = useColorMode()

const changeColorMode = (mode: 'light' | 'dark') => {
    colorMode.value = mode
    colorMode.preference = mode
}
</script>

<template>
    <header :class="[
        'common-header',
        'transparent',
        blurMaskVisible() ? 'blur-mask' : '']">
        <div class="common-header-nav">
            <div class="logo">
                <NuxtLink :to="localePath('/')">
                    <EverglowLogo :size="30" />
                    <div class="logo-text">{{ $t('body.header.name') }}</div>
                </NuxtLink>
            </div>
            <ul :class="['main-menu', menuListVisible ? 'active' : '']">
                <li v-for="(item, index) in mainMenuItemList" class="main-menu-item" :key="index">
                    <NuxtLink :to="localePath(item.link)" @click="closeMenu()">
                        <div class="text">{{ $t(`body.header.${item.name}`) }}</div>
                    </NuxtLink>
                    <div class="chevron">
                        <Icon name="line-md:chevron-small-right" />
                    </div>
                </li>
            </ul>
            <ul class="user-actions">
                <li class="user-actions-item language">
                    <CommonHeaderLanguage />
                </li>
                <li class="user-actions-item mode">
                    <div class="icon-button">
                        <span class="light" v-show="$colorMode.value === 'light'">
                            <Icon name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                                @click="changeColorMode('dark')" />
                        </span>
                        <span class="dark" v-show="$colorMode.value === 'dark'">
                            <Icon name="line-md:sunny-outline-to-moon-loop-transition"
                                @click="changeColorMode('light')" />
                        </span>
                    </div>
                </li>
                <li class="user-actions-item github">
                    <div class="icon-button">
                        <NuxtLink href="https://github.com/Solaestas/Everglow" title="Github"
                            aria-label="Everglow on Github" target="_blank">
                            <Icon name="uil:github" />
                        </NuxtLink>
                    </div>
                </li>
                <li class="user-actions-item main-menu-trigger">
                    <div class="icon-button" @click="openMenu()" v-show="!menuListVisible">
                        <Icon name="line-md:menu-fold-left" />
                    </div>
                    <div class="icon-button" @click="closeMenu()" v-show="menuListVisible">
                        <Icon name="line-md:close" />
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
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

    user-select: none;

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

    .common-header-nav {
        position: relative;
        height: 5rem;
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
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
            padding-left: 40px;

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
                font-weight: var(--font-weight--bold);
            }
        }

        .main-menu {
            display: flex;
            align-items: center;
            font-family: Public Sans;
            font-weight: var(--font-weight--bold);
            font-size: 1.125rem;
            column-gap: 3rem;

            .main-menu-item {
                line-height: 1.5rem;

                .text {
                    transition: color 0.3s;
                }

                .chevron {
                    display: none;
                    align-items: center;
                    opacity: 0;
                    transform-origin: center;
                    animation: globalnav-chevron-hover-off .24s cubic-bezier(.4, 0, .6, 1) both;
                }

                &:hover {
                    cursor: pointer;

                    .text {
                        color: var(--everglow-blue-5) !important;
                    }
                }
            }
        }

        .user-actions {
            display: flex;
            margin-right: 40px;
            column-gap: 0.5rem;

            .user-actions-item {
                font-size: 20px;

                display: flex;
                align-items: center;

                cursor: pointer;

                .icon-button {
                    display: inline-flex;
                    padding: 0.5rem;
                    border-radius: 8px;
                    overflow: hidden;
                    transition: background-color 0.15s ease-in;

                    &>* {
                        width: 20px;
                        height: 20px;
                    }

                    &:hover {
                        background-color: var(--everglow-trans-black-3);
                    }
                }
            }

            .mode {
                .light {
                    color: var(--everglow-red-4);
                }

                .dark {
                    color: var(--everglow-blue-5);
                }
            }

            .main-menu-trigger {
                display: none;
            }
        }
    }
}

@media only screen and (max-width: 833px) {
    .common-header {
        .common-header-nav {
            .main-menu {
                position: absolute;
                top: 5rem;
                flex-direction: column;

                width: 100%;

                background-color: var(--everglow-white);

                align-items: baseline;
                justify-content: center;
                padding: 0 40px;

                height: 0;
                opacity: 0;
                overflow: hidden;
                transition: all 0.3s ease-in-out;

                &.active {
                    display: flex;
                    opacity: 1;
                    height: calc(100dvh - 5rem);
                }

                .main-menu-item {
                    width: 100%;
                    height: 5rem;
                    line-height: 5rem;
                    font-size: 2rem;

                    display: flex;
                    justify-content: space-between;

                    .chevron {
                        display: flex;
                    }

                    &:hover {
                        .chevron {
                            opacity: 1;
                            animation: globalnav-chevron-slide-in-hover .24s cubic-bezier(.4, 0, .6, 1) both
                        }
                    }
                }
            }

            .user-actions {
                margin-right: 0;

                .main-menu-trigger {
                    width: 40px;
                    display: flex;
                }
            }
        }
    }

    @keyframes globalnav-chevron-slide-in-hover {
        0% {
            opacity: 0;
            transform: translate(-4px)
        }

        to {
            opacity: 1;
            transform: translate(0)
        }
    }

    @keyframes globalnav-chevron-hover-off {
        0% {
            opacity: 1;
            transform: scale(1);
        }

        100% {
            opacity: 0;
            transform: scale(.8);
        }
    }
}
</style>