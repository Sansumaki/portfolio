<script lang="ts">
	import Section from '$lib/section.svelte';
</script>

<div class="title"></div>
<div class="container">
	<div>
		<h1 class="name">Sebastian Schmerek</h1>
		<h2>Software Engineer, Web Developer & IT Expert</h2>
		<p>
			Hallo, ich bin ein passionierter Softwareentwickler und IT-Experte mit mehr als 20 Jahren Erfahrung.
		</p>
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';

	.title {
		background-image: url('/images/hellobackground.jpeg');
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
		z-index: -1;

		position: absolute;
		left: 0;
		height: 80vh;
		width: 100%;

		mask-image: linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.05) 50%, transparent);
		mask-size: 100%;
		mask-position: center;
		mask-repeat: no-repeat;
	}

	.container {
		padding: 0 5rem;
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		h1 {
			margin-bottom: 2rem;
			font-size: $font-size-2xl;
			font-family: $font-family-xl;
			font-variant: small-caps;
		}

		h2 {
			margin-bottom: 1rem;
			text-transform: uppercase;
		}
	}
</style>
