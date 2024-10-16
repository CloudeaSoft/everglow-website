import type { MarkdownParsedContent } from '@nuxt/content';

export interface Docs extends MarkdownParsedContent {
	author?: string;
	date: string;
	image?: string;
	icon?: string;
}
