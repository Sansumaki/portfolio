<script lang="ts">
	import Logo from '$lib/logo.svelte';
import '../app.scss';

	const currentYear = new Date().getFullYear();
	let headerHeight: number;
	let mainTop: string = '0px';
	$: mainTop = `${headerHeight}px`;
</script>

<header class="header" bind:clientHeight={headerHeight}>
	<div class="header-container">
		<div>
			<div class="left">
				<a href="/">
                    <Logo height="60px"/>
                </a>
			</div>
			<div class="right">
				<nav>
					<div>
						<ul class="prim-menu">
							<li><a href="#home"><span>// home</span></a></li>
							<li><a href="#about"><span>// about</span></a></li>
							<li><a href="#projects"><span>// projects</span></a></li>
							<li><a href="#contact"><span>// contact</span></a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
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
		vertical-align: middle;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 100;

		.header-container {
			padding: 0 4.4vh;
			position: relative;
			z-index: 1;
			height: 14vh;

			> div {
				height: 100%;
				@include justify-between;
				@include display-flex;
				@include align-items(center);

				.left {
					@include display-flex;
					@include align-items(center);

					a {
						margin: 0;
					}
					.logo {
						fill: red;
                        color: red;
						height: 60px;
						margin: 0;
					}
				}

				.right {
					@include justify-end;
					@include display-flex;
					@include align-items(center);
					float: right;

					nav {
						@include absolute-center;
						cursor: default;
						z-index: 10;
						font-weight: 500;
						height: 100%;
						@include display-flex;
						@include align-items(center);
						display: block;

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

								li {
									a {
										padding: 0 1.3vw;
										height: 100%;

										span {
											line-height: 1.3;
											position: relative;

											&:before {
												content: '0' counter(number);
												display: inline-block;
												font-weight: 700;
												width: auto;
												right: 0;
												top: -0.75em;
												line-height: 0.6em;
												font-size: 0.6em;
												position: absolute;
												height: auto;
												opacity: 0.75;
											}
										}
									}
								}
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
</style>
