<script lang="ts">
	export let jobtitle: string;
	export let company: string | undefined = undefined;
	export let from: string | undefined = undefined;
	export let to: string | undefined = undefined;
	export let place: string | undefined = undefined;
</script>

<div class="row-conatiner">
	<div>
		<b>{jobtitle}</b>
		{#if company}
			, {company}
		{/if}
	</div>
	<div>
		{from ?? ''}
		{#if from && to}
			&mdash;
		{/if}
		{to ?? ''}
		{#if place && (from || to)}
			<span style="margin: 0 3pt"> | </span>
		{/if}
		{place ?? ''}
	</div>
</div>

<style lang="scss">
	.row-conatiner {
		margin: 5pt 0;
		display: flex;
		display: -ms-flexbox;
		flex-flow: row wrap;
		-ms-flex-wrap: row-wrap;
		justify-content: space-between;
		-ms-flex-pack: justify;
		align-content: flex-end;
		-ms-flex-line-pack: start;
		align-items: baseline;
        color: silver;

		:first-child {
			font-size: 12pt;
			letter-spacing: 2pt;
			b {
				font-size: 15pt;
				color: white;
			}
		}

		:last-child {
			letter-spacing: 1.5pt;
			font-size: 10pt;
		}
	}
</style>
