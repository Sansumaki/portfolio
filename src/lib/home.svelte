<script>
	import Section from './section.svelte';
</script>

<Section key="home">
	<div class="title"></div>
	<h1>Sebastian Schmerek</h1>
	<h2>Software Engineer, Web Developer & IT Expert</h2>
	<p>Hello, I am a software engineer and computer specialist with more than 20 years of experience.</p>
</Section>

<style lang="scss">
	@import '../variables.scss';

	.title {
		background-image: url('/desktop.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto;
		height: 30em;

		mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.2), transparent);
		mask-size: 100%;
		mask-position: center;
		mask-repeat: no-repeat;
	}

	h1 {
		margin-top: -2em;
		margin-bottom: 0.5em;
		font-size: $font-size-2xl;
		font-family: $font-family-xl;
		font-variant: small-caps;
	}
	h2 {
		font-size: $font-size-md;
		font-family: $font-family-md;
		text-transform: uppercase;
		font-weight: normal;
	}
	p {
		margin-top: 1em;
		font-size: $font-size;
		font-family: $font-family;
		text-transform: uppercase;
		font-weight: normal;
	}
</style>
