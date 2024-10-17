<script setup lang="ts"></script>

<template>
	<div class="test">
		<div class="canvas-container">
			<TresCanvas
				clear-color="#82DBC5"
				preset="realistic"
			>
				<TresPerspectiveCamera
					:position="[3, 3, 3]"
					:fov="90"
					:look-at="[0, 0, 0]"
				/>
				<TresMesh>
					<TresTorusGeometry :args="[1, 0.5, 16, 32]" />
					<TresMeshBasicMaterial color="orange" />
				</TresMesh>
				<OrbitControls />
			</TresCanvas>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.test {
		margin-top: var(--header-height);
		height: 100dvh;

		.canvas-container {
			width: 700px;
			height: 400px;
			margin: auto;
			background-color: #fff;
		}
	}
</style>
