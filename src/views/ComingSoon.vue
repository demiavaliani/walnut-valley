<template>
	<div class="coming-soon">
		<img src="../assets/images/logo.png" />
		<p>WE'RE COMING SOON</p>
	</div>
</template>

<style lang="scss" scoped>
	.coming-soon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		gap: 10rem;
	}

	img {
		width: 20vw;
	}

	p {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 5vw;
		font-weight: 600;
		color: $wv-logo-kernel-color;
	}
</style>
