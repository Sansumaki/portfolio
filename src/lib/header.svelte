<script>
	import Logo from './logo.svelte';
	import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime.js"
	import { i18n } from '$lib/i18n'
	import { page } from '$app/stores'
	import * as m from '$lib/paraglide/messages';
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
						<li><a href="/"><span>//{m.home()}</span></a></li>
						<li><a href="/about"><span>//{m.about()}</span></a></li>
						<li><a href="/experience"><span>//{m.experience()}</span></a></li>
						<li><a href="/contact"><span>//{m.contact()}</span></a></li>
					</ul>
				</div>
			</nav>
		</div>
		<div>
			{#each availableLanguageTags as lang, i}
				<!-- the hreflang attribute decides which language the link points to -->
				{#if i > 0}<span style="margin: 0 0.5em">|</span>{/if}<a
					href={i18n.route($page.url.pathname)}
					hreflang={lang}
					aria-current={lang === languageTag() ? 'page' : undefined}
				>
					{lang}
				</a>
			{/each}
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
		padding: 0 2rem;
		position: relative;
		z-index: 1;
		height: 6rem;

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
