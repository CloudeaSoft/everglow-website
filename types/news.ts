import type { MarkdownParsedContent } from '@nuxt/content';

interface NewsItemProps extends MarkdownParsedContent {
	author?: String;
	date: Date;
	image?: String;
}

export { type NewsItemProps as News };
