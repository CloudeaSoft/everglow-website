import type { MarkdownParsedContent } from '@nuxt/content';

export interface News extends MarkdownParsedContent {
	author?: string;
	date: Date;
	image?: string;
}
