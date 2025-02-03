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
		<p>
			<a href="/impressum"><span>Impressum</span></a>
			<a href="/datenschutzerklaerung"><span>Datenschutzerklärung</span></a>
		</p>
	</footer>
</div>

<style lang="scss">
	@import '../variables.scss';

	.container {
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 10px;
		grid-template-areas:
			'header'
			'content'
			'footer';
		min-height: 100vh;
	}

	header {
		grid-area: header;
		vertical-align: middle;
	}

	main {
		grid-area: content;
	}

	footer {
		grid-area: footer;
		text-align: center;
		padding: 20px 0;
		background-color: #181818;
		color: #fff;
		a {
			text-decoration: none;
			color: silver;

			&:hover {
				color: white;
			}
			span {
				font-size: small;
				margin-left: 1.5em;
				margin-right: 0.5em;
				position: relative;
				&:before {
					content: '//';
					display: inline-block;
					font-weight: 700;
					width: auto;
					color: silver;
					top: 0.3em;
					left: -1em;
					line-height: 1em;
					font-size: 1em;
					position: absolute;
					height: auto;
					opacity: 0.75;
				}
			}
		}
		p {
			font-size: small;
		}
	}
</style>
