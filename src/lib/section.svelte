<script lang="ts">
	export let key: string;
	export let title: string;
</script>

<section id={key}>
	<div>
		<h2>{title}</h2>
		<slot></slot>
	</div>
</section>

<style lang="scss">
	section {
		padding: 40px 20px;
		margin-top: calc(-1 * var(--main-top));
		padding-top: calc(20px + var(--main-top));
		text-align: center;
		min-height: 100vh;
        width: 100%;
		display: table;

		div {
			display: table-cell;
			vertical-align: middle;
            text-align: center;
		}
	}
</style>
