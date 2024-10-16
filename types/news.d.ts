import type { MarkdownParsedContent } from '@nuxt/content';

export interface News extends MarkdownParsedContent {
	author?: String;
	date: Date;
	image?: String;
}
