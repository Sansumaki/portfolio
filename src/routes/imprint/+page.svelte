<script lang="ts">
	import Section from '$lib/section.svelte';
	import * as m from '$lib/paraglide/messages';
	import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_PHONE, PUBLIC_CONTACT_ADDRESS } from '$env/static/public';
	import { formatPhoneNumber } from '$lib/phoneNumberConverter';

</script>

<Section title="<{m.impressum()} />">
	<h2>{m.impressum_verantwortlich()}</h2>
	<p>{@html PUBLIC_CONTACT_ADDRESS}</p>
	<h2>{m.contact()}</h2>
	<p>
		E-Mail: <a href="mailto:{PUBLIC_CONTACT_EMAIL}">{PUBLIC_CONTACT_EMAIL}</a><br />
		Mobile: <a href="tel:{PUBLIC_CONTACT_PHONE}">{formatPhoneNumber(PUBLIC_CONTACT_PHONE)}</a>
	</p>
</Section>
