<script lang="ts">
	import Section from '$lib/section.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<Section title="<{m.about()} />">
	<img src="/images/portrait.jpeg" alt="Sebastian Schmerek" width="250rem" />
	<p>
		{@html m.about_text().replace(/\n/g, '<br />')}
	</p>
</Section>

<style lang="scss">
	img {
		border-radius: 15%;
		margin: 0 0 2rem 0;
	}
</style>
