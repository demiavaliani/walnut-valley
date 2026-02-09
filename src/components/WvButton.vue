<template>
	<button class="wv-button">{{ text }}</button>
</template>

<script lang="ts" setup>
	defineProps<{
		text: string;
	}>();
</script>

<style lang="scss">
	.wv-button {
		padding: 1.2rem 1.6rem;
		background-color: #6c7340;
		border-radius: 1rem;
		font-weight: $wv-fw-medium;
		color: #ffffff;

		&:hover {
			background-color: #85903e;
		}
	}
</style>
