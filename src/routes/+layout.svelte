<script lang="ts">
	import Header from '$lib/header.svelte';

	const currentYear = new Date().getFullYear();
	let headerHeight: number;
	let mainTop: string = '0px';
	$: mainTop = `${headerHeight}px`;
</script>

<header class="header" bind:clientHeight={headerHeight}>
	<Header></Header>
</header>

<main style="--main-top: {mainTop}">
	<slot />
</main>

<footer>
	<p>&copy; {currentYear} S.Schmerek</p>
</footer>

<style lang="scss">
	@import '../variables.scss';

	header {
		vertical-align: middle;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 100;
	}

	main :global(section) {
		scroll-margin-top: var(--main-top);
	}

	footer {
		text-align: center;
		padding: 20px 0;
		background-color: #333;
		color: #fff;
	}
</style>
