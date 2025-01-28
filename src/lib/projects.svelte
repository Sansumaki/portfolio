<script>
	import Section from './section.svelte';
</script>

<Section key="projects" title="<projects />">
	<div class="project">
		<h3>Project Title 1</h3>
		<p>Short description of the project.</p>
	</div>
	<div class="project">
		<h3>Project Title 2</h3>
		<p>Short description of the project.</p>
	</div>
</Section>

<style lang="scss">
	.project {
		margin: 20px 0;
	}

	.project h3 {
		margin: 10px 0;
	}

	.project a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
	}
</style>
