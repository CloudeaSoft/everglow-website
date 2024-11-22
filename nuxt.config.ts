// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-07-11',
	devtools: {
		enabled: true,
		componentInspector: false,
	},
	eslint: {
		checker: {
			configType: 'eslintrc',
		},
		config: {
			stylistic: false,
		},
	},
	typescript: {
		typeCheck: true,
		strict: false,
	},
	modules: [
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxtjs/color-mode',
		'@nuxt/fonts',
		'@nuxtjs/i18n',
		'@nuxtjs/seo',
		'@nuxt/content',
		'@nuxt/image',
		'@tresjs/nuxt',
	],
	ssr: true,
	nitro: {
		// preset: 'node-server',
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			colorModeStorageKey: process.env.COLOR_MODE_STORAGE_KEY,
		},
	},
	app: {
		baseURL: '',
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					name: 'author',
					content: 'Dream Chaser Group',
				},
				{
					name: 'keywords',
					content: 'Everglow,流光无际',
				},
				{
					name: 'keywords',
					content: 'tmodloader-mod',
				},
				{
					name: 'keywords',
					content: 'Terraria,泰拉瑞亚',
				},
			],
			link: [
				{
					rel: 'alternate',
					hreflang: 'zh-cn',
					href: 'https://everglow.cloudea.work/zh-cn',
				},
				{
					rel: 'alternate',
					hreflang: 'en-us',
					href: 'https://everglow.cloudea.work/en-us',
				},
				{
					rel: 'alternate',
					hreflang: 'zh-hk',
					href: 'https://everglow.cloudea.work/zh-hk',
				},
				{
					rel: 'alternate',
					hreflang: 'x-default',
					href: 'https://everglow.cloudea.work/',
				},
			],
			noscript: [
				{
					children: 'JavaScript is required',
				},
			],
		},
		keepalive: true,
		layoutTransition: false,
		pageTransition: false,
		rootAttrs: {
			id: '__nuxt',
		},
	},
	router: {
		options: {
			hashMode: false,
		},
	},
	robots: {
		allow: '/',
	},
	site: {
		url: 'https://everglow.cloudea.work',
	},
	sitemap: {
		strictNuxtContentPaths: true,
	},
	schemaOrg: {
		identity: {
			type: 'Organization',
			name: 'Everglow Team',
			url: 'https://everglow.cloudea.work',
			logo: 'https://everglow.cloudea.work/logo.png',
		},
	},
	content: {
		highlight: {
			theme: {
				default: 'github-dark',
				light: 'github-light',
				dark: 'github-dark',
			},
			langs: [
				'json',
				'js',
				'ts',
				'html',
				'css',
				'vue',
				'shell',
				'mdc',
				'md',
				'yaml',
				'c',
				'cpp',
				'java',
				'csharp',
			],
		},
	},
	fonts: {
		families: [
			{
				name: 'Abel',
				provider: 'bunny',
			},
			{
				name: 'Satoshi',
				provider: 'fontshare',
			},
			{
				name: 'Kode Mono',
				provider: 'none',
			},
			{
				name: 'Oswald',
				fallbacks: ['Times New Roman'],
			},
			{
				name: 'Aleo',
				provider: 'adobe',
			},
			{
				name: 'Barlow Semi Condensed',
				provider: 'adobe',
			},
			{
				name: 'Barlow',
				preload: true,
			},
			{
				name: 'Roboto Mono',
				provider: 'fontsource',
			},
			{
				name: 'Roboto Flex',
				provider: 'fontsource',
			},
			{
				name: 'Public Sans',
				src: '/fonts/Public-Sans.woff',
			},
			{
				name: 'JetBrains Mono',
				src: '/fonts/JetBrains-Mono.woff2',
			},
		],
		defaults: {
			weights: [400],
			styles: ['normal', 'italic'],
			subsets: [
				'cyrillic-ext',
				'cyrillic',
				'greek-ext',
				'greek',
				'vietnamese',
				'latin-ext',
				'latin',
			],
		},
		fallbacks: {
			'serif': ['Times New Roman'],
			'sans-serif': ['Arial'],
			'monospace': ['Courier New'],
		},
		providers: {
			google: false,
			googleicons: false,
		},
		adobe: {
			id: ['sij5ufr', 'grx7wdj'],
		},
		experimental: {
			processCSSVariables: true,
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
			{
				code: 'zh-cn',
				language: 'zh-CN',
				file: 'zh-CN.ts',
			},
			{
				code: 'zh-hk',
				language: 'zh-HK',
				file: 'zh-HK.ts',
			},
			{
				code: 'en-us',
				language: 'en-US',
				file: 'en-US.ts',
			},
		],
		defaultLocale: 'zh-cn',
		strategy: 'prefix_and_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'everglow-language',
			redirectOn: 'root',
			alwaysRedirect: false,
		},
	},
	tres: {
		devtools: true,
		glsl: true,
	},
});
