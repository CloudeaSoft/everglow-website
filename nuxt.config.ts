// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/seo'
  ],
  ssr: true,
  devServer: {
    port: 3000
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      colorModeStorageKey: process.env.COLOR_MODE_STORAGE_KEY
    }
  },
  app: {
    baseURL: '',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
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
    layoutTransition: false,
    pageTransition: false,
    rootAttrs: {
      id: '__nuxt'
    }
  },
  router: {
    options: {
      hashMode: false
    }
  },
  robots: {
    allow: '/'
  },
  site: {
    url: 'https://everglow.cloudea.work',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Everglow Team',
      url: 'https://everglow.cloudea.work',
      logo: 'https://everglow.cloudea.work/logo.png'
    }
  },
  fonts: {
    providers: {
    },
    families: [
      { name: 'Abel', provider: 'bunny' },
      { name: 'Satoshi', provider: 'fontshare' },
      { name: 'Kode Mono', provider: 'none' },
      { name: 'Oswald', fallbacks: ['Times New Roman'] },
      { name: 'Aleo', provider: 'adobe' },
      { name: 'Barlow Semi Condensed', provider: 'adobe' },
      { name: 'Barlow', preload: true },
      { name: 'Roboto Mono', provider: 'fontsource' },
      { name: 'Roboto Flex', provider: 'fontsource' },
      { name: 'Custom1', src: '/fonts/a.woff' },
      { name: 'Custom2', src: '/fonts/b.woff' },
      { name: 'Public Sans', src: '/fonts/public-sans.woff' },
      { name: 'Custom4', src: '/fonts/d.woff2' },
    ],
    adobe: {
      id: ['sij5ufr', 'grx7wdj'],
    },
    defaults: {
      fallbacks: {
        monospace: ['Tahoma'],
      },
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__EVERGLOW_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 'everglow-',
    classSuffix: '-mode',
    storage: 'cookie',
    storageKey: process.env.COLOR_MODE_STORAGE_KEY,
  },
  i18n: {
    langDir: './lang',
    locales: [
      { code: 'zh-cn', iso: 'zh-CN', file: 'zh-CN.ts' },
      { code: 'zh-hk', iso: 'zh-HK', file: 'zh-HK.ts' },
      { code: 'en-us', iso: 'en-US', file: 'en-US.ts' },
    ],
    defaultLocale: 'zh-cn',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'everglow-language',
      redirectOn: 'root'
    }
  }
})