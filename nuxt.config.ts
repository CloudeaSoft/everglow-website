// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],
  ssr: true,
  router: {
    options: {
      hashMode: false
    }
  },
  app: {
    baseURL: '',

    head: {
      charset: 'utf-8',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'everglow team' },
        { name: 'keywords', content: 'everglow' },
        { name: 'keywords', content: 'tmodloader-mod' },
        { name: 'keywords', content: 'terraria' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    },
    keepalive: true,
  },
  colorMode:{
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__EVERGLOW_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 'everglow-',
    classSuffix: '-mode',
    storageKey: 'everglow-color-mode'
  }
})
