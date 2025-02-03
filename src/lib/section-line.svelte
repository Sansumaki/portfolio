<script lang="ts">
	interface Props {
		jobtitle: string;
		company?: string | undefined;
		from?: string | undefined;
		to?: string | undefined;
		place?: string | undefined;
	}

	let {
		jobtitle,
		company = undefined,
		from = undefined,
		to = undefined,
		place = undefined
	}: Props = $props();
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
