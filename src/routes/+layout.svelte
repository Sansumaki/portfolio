<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import Header from '$lib/header.svelte';
	import * as m from '$lib/paraglide/messages';

	let { children }: Props = $props();

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
	<meta name="author" content="Sebastian Schmerek | IT-San" />
</svelte:head>

<ParaglideJS {i18n}>
	<div class="container">
		<header>
			<Header></Header>
		</header>

		<main>
			{@render children?.()}
		</main>

		<footer>
			<p>&copy; {currentYear} Sebastian Schmerek</p>
			<p>
				<a href="/imprint"><span>{m.impressum()}</span></a>
				<a href="/privacy_policy"><span>{m.privacy_policy()}</span></a>
			</p>
		</footer>
	</div>
</ParaglideJS>

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
