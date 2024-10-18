export default {
	nuxtSiteConfig: {
		name: 'Everglow',
		description: 'Welcome to Everglow no Sekai!',
	},
	head: {
		title: 'Everglow',
		subtitles: {
			news: 'News',
			wiki: 'Wiki',
			docs: 'Docs',
			playground: 'Playground',
			about: 'About',
		},
	},
	body: {
		header: {
			name: 'Everglow',
			home: 'Home',
			news: 'News',
			wiki: 'Wiki',
			docs: 'Docs',
			playground: 'Playground',
			about: 'About',
			settings: {
				languages: {
					'zh-cn': '简体中文',
					'en-us': 'English',
					'zh-hk': '繁体中文',
				},
			},
		},
	},
	news: {
		'chevron-text': 'Read More',
	},
};
