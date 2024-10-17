<script setup lang="ts">
	import type { News } from '~/types/news';

	const i18n = useI18n();
	const route = useRoute();
	useHead({
		title: i18n.t('head.subtitles.news'),
	});

	const { data: page } = await useAsyncData(route.path, () =>
		queryContent<News>(route.path).findOne(),
	);

	if (!page.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found',
			fatal: true,
		});
	}

	const clearPageAnchor = () => {};
</script>

<template>
	<div class="news">
		<div class="news-container">
			<div class="news-content">
				<div class="article">
					<div class="article-content">
						<div
							v-if="page.image"
							class="article-title"
							@click="clearPageAnchor"
						>
							<img :src="page.image.toString()" />
							<div
								class="title-container"
								@click.prevent
							>
								<h1 class="text">{{ page.title }}</h1>
							</div>
						</div>
						<div
							v-else
							class="article-title-noimage"
						>
							{{ page.title }}
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
				</div>
				<div class="toc">
					<CommonContentToc
						title="Table of Content"
						:links="page.body.toc?.links"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.news {
		margin-top: var(--header-height);

		.news-container {
			min-height: 800px;
			padding-bottom: 3rem;
			display: flex;
			justify-content: center;

			.news-content {
				max-width: 1200px;
				width: 80%;

				display: flex;
				justify-content: space-between;

				.article {
					padding-top: 3rem;
					width: calc(100% - 210px);

					.article-content {
						overflow: hidden;
						border: 1px solid var(--everglow-trans-blue-1);
						border-radius: 15px;
						box-shadow: var(--shadow);

						display: flex;
						flex-direction: column;

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
									font-size: 3rem;
									user-select: all;
									margin: 1.5rem;
									padding: 0.75rem 1rem;

									border: 1px solid var(--everglow-trans-blue-1);
									border-radius: 1rem;
									backdrop-filter: blur(16px);
									background-color: var(--everglow-trans-white-3);
								}
							}
						}

						.article-title-noimage {
							font-size: 4rem;
							user-select: all;
							margin: 2rem 2rem 0;
							padding: 0.75rem 1rem 0;
						}

						.article-head {
							padding: 1.5rem 3rem 0;

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
					}
				}

				.toc {
					width: 210px;
					top: var(--header-height);
					position: sticky;
					backdrop-filter: blur(8px);
					max-height: calc(100vh - var(--header-height));
					padding: 0 1rem;
					margin-left: 30px;
					order: 5000;
				}
			}
		}
	}

	@media only screen and (max-width: 833px) {
		.news {
			.news-container {
				.news-content {
					width: 90%;

					.article {
						.article-content {
							overflow: auto;
							border: none;
							border-radius: 0;
						}
					}
				}
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.news {
			.news-container {
				.news-content {
					flex-direction: column;

					.article {
						width: 100%;
					}
					.toc {
						margin: 0;
						padding: 0;
						width: 100%;
						order: -9999;
						z-index: 1000;
					}
				}
			}
		}
	}
</style>
