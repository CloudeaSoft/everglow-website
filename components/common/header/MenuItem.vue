<script setup lang="ts">
	const { name, link } = defineProps({
		name: String,
		link: String,
	});

	const emit = defineEmits(['navigate']);
</script>

<template>
	<div class="main-menu-item">
		<NuxtLinkLocale
			:to="link"
			:target="link[0] !== '/' ? '_blank' : '_self'"
			@click="emit('navigate')"
			style="width: 100%"
		>
			<div class="text">
				{{ $t(`body.header.${name}`) }}
			</div>
		</NuxtLinkLocale>
		<div class="chevron">
			<Icon name="line-md:chevron-small-right" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.main-menu-item {
		line-height: 1.5rem;

		.text {
			transition: color 0.3s;
		}

		.chevron {
			display: none;
			align-items: center;
			opacity: 0;
			transform-origin: center;
			animation: globalnav-chevron-hover-off 0.24s cubic-bezier(0.4, 0, 0.6, 1)
				both;
		}

		&:hover {
			cursor: pointer;

			.text {
				color: var(--everglow-blue-5) !important;
			}
		}
	}
	@media only screen and (max-width: 833px) {
		.main-menu-item {
			width: 100%;
			height: var(--header-height);
			line-height: var(--header-height);
			font-size: 2rem;

			display: flex;
			justify-content: space-between;

			.chevron {
				display: flex;
			}

			&:hover {
				.chevron {
					opacity: 1;
					animation: globalnav-chevron-slide-in-hover 0.24s
						cubic-bezier(0.4, 0, 0.6, 1) both;
				}
			}
		}

		@keyframes globalnav-chevron-slide-in-hover {
			0% {
				opacity: 0;
				transform: translate(-4px);
			}

			to {
				opacity: 1;
				transform: translate(0);
			}
		}

		@keyframes globalnav-chevron-hover-off {
			0% {
				opacity: 1;
				transform: scale(1);
			}

			100% {
				opacity: 0;
				transform: scale(0.8);
			}
		}
	}
</style>
