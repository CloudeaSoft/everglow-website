<script setup lang="ts">
	import type { News } from '~/types/news';

	const { newsItem: props } = defineProps<{
		newsItem: News;
	}>();

	const title = props.title && props.title.trim() ? props.title : 'Title';
	const description =
		props.description && props.description.trim()
			? props.description
			: 'Description';
	const author =
		props.author && props.author.trim() ? props.author : 'Everglow Team';
	const date = props.date.toLocaleString('zh-CN');
	const img = props.image;

	const handleClickNews = () => {
		const localePath = useLocalePath();
		navigateTo(localePath(props._path));
	};
</script>

<template>
	<li
		class="news-item"
		@click="handleClickNews()"
	>
		<div
			class="news-item-img"
			:style="`background-image: url('${img}')`"
			v-if="img"
		></div>
		<div class="news-item-content">
			<h1 class="news-item-header">{{ title }}</h1>
			<div class="news-item-body">
				{{ description }}
			</div>
			<div class="news-item-footer">
				<div class="info">
					<div class="author">{{ `By ${author}` }}</div>
					<div class="divider"></div>
					<div class="date">
						<Icon name="line-md:calendar" />
						<div class="text">{{ date }}</div>
					</div>
				</div>
				<div class="btn">
					<div class="btn-text">{{ $t('Read More') }}</div>
					<div class="btn-chevron"><Icon name="lucide:chevron-right" /></div>
				</div>
			</div>
		</div>
	</li>
</template>

<style lang="scss" scoped>
	.news-item {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		max-width: 800px;
		margin-top: 40px;
		border-radius: 10px;
		overflow: hidden;
		background-color: var(--everglow-white);
		box-shadow: var(--shadow);
		transition: border-color 0.3s ease-out;
		cursor: pointer;

		// animation:
		// 	appear 1s linear forwards,
		// 	disappear 1s linear forwards;
		// animation-timeline: view();
		// animation-range: entry, exit;

		&:first-child {
			margin-top: 0;
		}

		.news-item-img {
			height: 150px;
			width: 100%;
			background-size: cover;
			background-position: center;
		}

		.news-item-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			row-gap: 2rem;
			width: 100%;

			padding: 1.75rem 2rem;

			.news-item-header {
				line-height: 1.5;
			}

			.news-item-body {
				font-size: 1.125rem;
			}

			.news-item-footer {
				display: flex;
				justify-content: space-between;
				font-size: 1rem;

				.info {
					display: flex;

					.divider {
						margin: 0 5px;
						width: 2px;
						border: 1px solid var(--everglow-trans-black-3);
					}

					.date {
						display: flex;
						align-items: center;

						.text {
							margin-left: 3px;
						}
					}
				}

				.btn {
					display: flex;
					align-items: center;
					transition:
						color 0.2s ease-in-out,
						transform 0.2s;

					.btn-chevron {
						display: flex;
					}

					&:hover {
						color: var(--everglow-blue-5) !important;
						transform: scale(1.1);
					}
				}
			}
		}
	}

	@keyframes appear {
		from {
			opacity: 0;
			transform: matrix(0.8, 0, 0, 0.8, 0, 0);
		}

		to {
			opacity: 1;
			transform: matrix(1, 0, 0, 1, 0, 0);
		}
	}

	@keyframes disappear {
		to {
			opacity: 0;
			transform: matrix(0.8, 0, 0, 0.8, 0, 0);
		}

		from {
			opacity: 1;
			transform: matrix(1, 0, 0, 1, 0, 0);
		}
	}
</style>
