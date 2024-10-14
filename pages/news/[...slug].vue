<script setup lang="ts">
	import type { News } from '~/types/news';

	const i18n = useI18n();
	const route = useRoute();
	useHead({
		title: i18n.t('head.subtitles.news'),
	});

	const { data: page } = await useAsyncData('content', () =>
		queryContent<News>(route.path).findOne(),
	);
	console.log(page.value.body);
	if (!page.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found',
			fatal: true,
		});
	}
</script>

<template>
	<div class="news">
		<div class="news-container">
			<div class="news-content">
				<div class="article">
					<div class="article-title">
						<img :src="page.image.toString()" />
						<div class="title-container">
							<h1 class="text">{{ page.title }}</h1>
						</div>
					</div>
					<div class="article-head">
						<div class="avatar">
							<img
								src="/icon.png"
								alt=""
							/>
						</div>
						<div class="info">
							<h2 class="author">Everglow Team</h2>
							<div class="meta-info">
								<div class="date">
									<Icon name="line-md:pencil" />
									<span class="text">{{ page.date }}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="article-body">
						<ContentRenderer
							class="markdown"
							:value="page"
						/>
					</div>
				</div>
				<div class="toc">{{ page.body.toc?.links }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.news {
		margin-top: 5rem;

		.news-container {
			min-height: 800px;
			padding: 3rem 0;
			display: flex;
			justify-content: center;

			.news-content {
				max-width: 1200px;
				width: 80%;

				display: flex;
				justify-content: space-between;
				gap: 30px;

				.article {
					width: calc(100% - 210px);
					display: flex;
					flex-direction: column;

					overflow: hidden;
					border: 1px solid var(--everglow-trans-blue-1);
					border-radius: 15px;

					.article-title {
						height: 25rem;
						width: 100%;
						position: relative;

						img {
							height: 100%;
							width: 100%;
							object-fit: cover;
							object-position: center;
						}

						.title-container {
							position: absolute;
							display: flex;
							width: 100%;
							bottom: 0;

							h1 {
								padding: 30px;
								font-size: 3rem;

								margin: 1.5rem;
								padding: 0.75rem 1rem;

								border: 1px solid var(--everglow-trans-blue-1);
								border-radius: 1rem;
								backdrop-filter: blur(16px);
								background-color: var(--everglow-trans-white-3);
							}
						}
					}

					.article-head {
						padding: 2rem 3rem 0;
						background-color: var(--crepe-color-background);
						height: 7rem;

						display: flex;
						align-items: center;

						.avatar {
							width: 46px;
							height: 46px;

							img {
								width: 100%;
								height: 100%;
							}
						}

						.info {
							height: 100%;
							margin-left: 20px;
							padding: 5px 0;

							display: flex;
							flex-direction: column;
							justify-content: space-between;

							font-family:
								Satoshi-Variable,
								Noto Sans SC,
								-apple-system,
								system-ui,
								Segoe UI,
								Roboto,
								Ubuntu,
								Cantarell,
								Noto Sans,
								sans-serif,
								BlinkMacSystemFont,
								Helvetica Neue,
								PingFang SC,
								Hiragino Sans GB,
								Microsoft YaHei,
								Arial;

							.author {
								font-family: Georgia, 'Times New Roman', Times, serif;
								font-weight: var(--font-weight--normal);
							}

							.meta-info {
								display: flex;

								.date {
									display: flex;
									align-items: center;

									.text {
										margin-left: 5px;
									}
								}
							}
						}
					}

					.article-body {
					}
				}

				.toc {
					width: 210px;
					height: 500px;
					// background-color: #fff;
				}
			}
		}
	}

	@media only screen and (max-width: 833px) {
	}

	@media only screen and (max-width: 640px) {
	}
</style>
