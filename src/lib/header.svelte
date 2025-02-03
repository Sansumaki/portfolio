<script>
	import Logo from './logo.svelte';
</script>

<div class="header-container">
	<div>
		<div class="left">
			<a href="/">
				<Logo height="60px" />
			</a>
		</div>
		<div class="right">
			<nav>
				<div>
					<ul class="prim-menu">
						<li><a href="/"><span>//home</span></a></li>
						<li><a href="/about"><span>//about</span></a></li>
						<li><a href="/experience"><span>//experience</span></a></li>
						<li><a href="/contact"><span>//contact</span></a></li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';

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
							font-family: 'Roboto mono', monospace;
							font-size: 1.1rem;
							letter-spacing: -1px;
                            counter-reset: number;
							@include display-flex;
							@include align-items(center);

							li {
                                counter-increment: number;
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
</style>
