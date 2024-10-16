import type { MarkdownParsedContent } from '@nuxt/content';

export interface Docs extends MarkdownParsedContent {
	author?: String;
	date: Date;
	image?: String;
	icon?: String;
}
