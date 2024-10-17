<script setup lang="ts">
	const route = useRoute();
	const i18n = useI18n();
	useHead({
		title: i18n.t('head.subtitles.about'),
	});

	const { data: page } = await useAsyncData(route.path, () =>
		queryContent(route.path).findOne(),
	);
</script>

<template>
	<div class="about">
		<div class="about-content">
			<div class="article">
				<div class="article-title">
					<img src="/images/everglow.jpg" />
					<div class="title-container">
						<h1 class="text">
							{{ page.title }}
						</h1>
					</div>
				</div>
				<ContentRendererMarkdown
					:value="page"
					class="markdown"
				/>
			</div>
			<div class="toc">
				<CommonContentToc
					title="Table of Content"
					:links="page.body.toc?.links"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.about {
		margin-top: var(--header-height);
		padding-top: 2rem;

		.about-content {
			display: flex;
			justify-content: space-between;
			width: 80%;
			max-width: 1200px;
			margin: 0 auto;

			.article {
				padding: 3rem 0;

				display: flex;
				flex-direction: column;

				width: calc(100% - 210px - 40px);

				.article-title {
					font-size: 3.5rem;
					height: 25rem;
					width: 100%;
					position: relative;

					border: 1px solid var(--everglow-trans-blue-1);
					border-radius: 1rem;
					backdrop-filter: blur(16px);
					background-color: var(--everglow-trans-white-3);
					overflow: hidden;

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
			}

			.toc {
				width: 210px;
				padding-left: 40px;
			}
		}
	}
</style>
