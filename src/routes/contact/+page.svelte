<script>
	import Section from '$lib/section.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<Section title="<{m.contact()} />">
	{m.contact_text()}
	<form method="post">
		<input name="name" type="text" placeholder={m.contact_name()} required />
		<input name="email" type="email" placeholder={m.contact_email()} required />
		<textarea name="message" placeholder={m.contact_message()} required></textarea>
		<button type="submit">{m.contact_send()}</button>
	</form>
</Section>

<style lang="scss">
	form {
		max-width: 400px;
		margin: 0 auto;
	}

	form input,
	form textarea {
		width: 100%;
		padding: 10px;
		margin: 10px 0;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	form textarea {
		height: 150px;
	}

	form button {
		background-color: #333;
		color: #fff;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	form button:hover {
		background-color: #555;
	}
</style>
