<script lang="ts">
	import Section from '$lib/section.svelte';
	import * as m from '$lib/paraglide/messages';
	import { formatPhoneNumber } from '$lib/phoneNumberConverter';

</script>

<Section title="<{m.impressum()} />">
	<h2>{m.impressum_verantwortlich()}</h2>
	<h2>{m.contact()}</h2>
	<p>
		E-Mail: <a href="mailto:info@it-san.dev">info@it-san.dev</a><br />
	
	</p>
</Section>
