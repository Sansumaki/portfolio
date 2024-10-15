<script lang="ts">
	import '../app.scss';

	const currentYear = new Date().getFullYear();
	let headerHeight: number;
	let mainTop: string = '0px';
	$: mainTop = `${headerHeight}px`;
</script>

<header class="header" bind:clientHeight={headerHeight}>
	<div>
		<div>
			<div class="left">
				<a href="/"> <img src="/SanLogo.svg" alt="Logo" class="logo" /></a>
			</div>
			<div class="right">
				<nav>
					<div>
						<ul class="prim-menu">
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
	<nav>
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
	<img src="/SanLogo.svg" alt="Logo" class="logo" />
</header>

<main style="--main-top: {mainTop}">
	<slot />
</main>

<footer>
	<p>&copy; {currentYear} S.Schmerek</p>
</footer>

<style lang="scss">
	@import '../app.scss';

	header {
		background-color: black;
		color: white;
		padding: 20px 0;
		text-align: center;
		position: sticky;
		top: 0;
		z-index: 100;

		> div {
			padding: 0 4.4vh;
			position: relative;
			z-index: 1;
			height: 14vh;

			> div {
				height: 100%;
				-webkit-box-pack: justify;
				-webkit-justify-content: space-between;
				-ms-flex-pack: justify;
				justify-content: space-between;
				@include display-flex;
				@include align-items(center);

				.left {
					@include display-flex;
					@include align-items(center);
				}

				.right {
					-webkit-box-pack: end;
					-webkit-justify-content: flex-end;
					-ms-flex-pack: end;
					justify-content: flex-end;
					@include display-flex;
					@include align-items(center);
					float: right;

					nav {
						position: absolute;
						left: 50%;
						-webkit-transform: translateX(-50%);
						-ms-transform: translateX(-50%);
						transform: translateX(-50%);
						cursor: default;
						position: relative;
						z-index: 10;
						font-weight: 500;
						height: 100%;
						@include display-flex;
						@include align-items(center);

						div {
							height: 100%;
							@include display-flex;
							@include align-items(center);

							.prim-menu {
								font-family: 'Roboto mono';
								font-size: 1.1rem;
								letter-spacing: -1px;
								@include display-flex;
								@include align-items(center);
							}
						}
					}
				}
			}
		}
	}

	main :global(section) {
		scroll-margin-top: var(--main-top);
	}

	nav ul {
		list-style-type: none;
		padding: 0;
		text-align: center;
	}

	nav ul li {
		display: inline;
		margin: 0 20px;
	}

	nav ul li a {
		color: #fff;
		text-decoration: none;
		font-weight: bold;
	}

	footer {
		text-align: center;
		padding: 20px 0;
		background-color: #333;
		color: #fff;
	}

	.logo {
		color: white;
		height: 80px;
		margin-top: 2em;
	}
</style>
