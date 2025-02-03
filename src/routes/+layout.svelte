<script lang="ts">
	import Header from '$lib/header.svelte';

	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title
		>Sebastian Schmerek | Software Engineer, Web Developer & IT Expert | Deutschland, Lüneburg,
		Hamburg</title
	>
	<meta
		name="description"
		content="Sebastian Schmerek; A software Enginieer with passtion and a quarter of a century of experience. "
	/>
	<meta
		name="keywords"
		content="Sebastian, Schmerek, Software, Engineer, IT, Spezialist, Expert, Webdevelopment, Deutschland, Lüneburg, Hamburg, Erfahrung, Experience"
	/>
	<meta name="author" content="Sebastian Schmerek | San" />
</svelte:head>

<div class="container">
	<header>
		<Header></Header>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; {currentYear} Sebastian Schmerek</p>
	</footer>
</div>

<style lang="scss">
	@import '../variables.scss';

	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 100px);
		background-color: beige;
		gap: 10px;
		grid-template-areas:
			'header header header'
			'nav nav nav'
			'aside content content'
			'aside section section'
			'footer footer footer';
		min-height: 100vh;
	}
	.container > div {
		background-color: green;
		font-size: 40px;
	}

	header {
		grid-area: header;
		background-color: green;
		vertical-align: middle;
	}

	main :global(section) {
		grid-area: content;
	}

	footer {
		grid-area: footer;
		text-align: center;
		padding: 20px 0;
		background-color: #181818;
		color: #fff;
	}
</style>
