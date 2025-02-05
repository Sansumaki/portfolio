<script lang="ts">
	import SectionLine from '$lib/section-line.svelte';
	import Section from '$lib/section.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<Section title="<{m.experience()} />">
	<SectionLine
		jobtitle="Expert Software Engineer"
		company="Reishauer AG"
		from="09/2022"
		to="present"
		place="Zürich, Schweiz"
	/>

	<div class="listdiv">
		<ul class="list">
			{@html m.experience_reishauer_02()}
		</ul>
	</div>

	<SectionLine
		jobtitle="Lead Software Engineer"
		company="THALES (RUAG AG)"
		from="12/2020"
		to="08/2022"
		place="Bern, Schweiz"
	/>
	<div class="listdiv">
		<ul class="list">
			{@html m.experience_ruag_02()}
		</ul>
	</div>

	<SectionLine
		jobtitle="Senior Software Engineer"
		company="THALES (RUAG AG)"
		from="03/2020"
		to="11/2020"
		place="Bern, Schweiz"
	/>
	<div class="listdiv">
		<ul class="list">
			{@html m.experience_ruag_01()}
		</ul>
	</div>

	<SectionLine
		jobtitle="Software Developer"
		company="Reishauer AG"
		from="09/2011"
		to="02/2020"
		place="Zürich, Schweiz"
	/>
	<div class="listdiv">
		<ul class="list">
			{@html m.experience_reishauer_01()}
		</ul>
	</div>

	<SectionLine
		jobtitle="Elektroniker Auszubildender"
		company="Reishauer AG"
		from="08/2007"
		to="07/2011"
		place="Zürich, Schweiz"
	/>
	<div class="listdiv">
		<ul class="list">
			{@html m.experience_lehre()}
		</ul>
	</div>
</Section>

<style lang="scss">
  .listdiv {
    color: silver;
    margin-left: 30px;
    margin-bottom: 2em;

    .list {
      font-size: 12pt;
      letter-spacing: 1.2pt;
      text-align: left;
      margin-left: 20px;
    }
  }
</style>
