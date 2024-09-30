<template>
    <footer class="common-footer">
        <div class="footer-container">
            <div class="content">footer</div>
            <div class="info">
                <div class="copyright">Copyright © 2024 Everglow Team Inc. All rights reserved.</div>
                <div class="links">
                    <ul class="link-list">
                        <li class="link-list-item discord">
                            <NuxtLink to="https://discord.gg/pdXvp89Dbp">
                                <Icon name="line-md:discord" />
                            </NuxtLink>
                        </li>
                        <li class="link-list-item github">
                            <NuxtLink to="https://github.com/Solaestas/Everglow">
                                <Icon name="line-md:github" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.common-footer {
    background-color: var(--everglow-white);

    .footer-container {
        margin: 0 auto;
        max-width: 980px;
        padding: 0 22px;
    }

    .content {
        padding-top: 3rem;
        margin-bottom: 1.5rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--everglow-trans-black-3);
    }

    .info {
        padding-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .copyright {
            font-size: 1.125rem;
        }

        .link-list {
            display: flex;

            .link-list-item {
                font-size: 1.8rem;
                padding: 10px;
            }
        }
    }
}
</style>