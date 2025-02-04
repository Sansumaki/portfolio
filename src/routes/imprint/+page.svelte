<script lang="ts">
	import Section from '$lib/section.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<Section title="<{m.impressum()} />">
	<h2>{m.impressum_verantwortlich()}</h2>
	<p>
		Sebastian Schmerek<br />
		21522 Hohnstorf (Elbe)<br />
		Deutschland<br />
	</p>
	<h2>{m.contact()}</h2>
	<p>
		E-Mail: <a href="mailto:sebastian@schmerek.me">contact@it-san.dev</a><br />
	</p>
</Section>
