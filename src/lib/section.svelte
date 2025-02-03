<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<div class="title"></div>
<div class="container">
	<div>
		{#if title}
			<h1>{title}</h1>
		{/if}
		<slot></slot>
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';
	.title {
		background-image: url('/images/workingbackground.jpeg');
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
		z-index: -1;

		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;

		mask-image: linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.05) 60%, transparent);
		mask-size: 100%;
		mask-position: center;
		mask-repeat: no-repeat;
	}

	.container {
		padding: 0 5rem;
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		h1 {
			margin-bottom: 2rem;
			text-transform: lowercase;
		}
	}
</style>
