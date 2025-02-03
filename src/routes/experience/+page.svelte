<script lang="ts">
	import SectionLine from '$lib/section-line.svelte';
	import Section from '$lib/section.svelte';
</script>

<Section title="<erfahrung />">
	<SectionLine
		jobtitle="Expert Software Engineer"
		company="Reishauer AG"
		from="09/2022"
		to="present"
		place="Zürich, Schweiz"
	/>

	<div class="listdiv">
		<ul class="list">
			<li>Verantwortlicher für die Migration von On-Premise Systemen zu Cloud Lösungen</li>
			<li>
				Konzeptionieren, entwicklen und implementieren von Systemarchitekturen von Software für
				CNCWerkzeugmaschinen
			</li>
			<li>Verbessern der Performance von Sinumerik-Maschinenkommunikation</li>
			<li>
				Verantwortlicher für die Instandhaltung und Wartung von DevOps Infrastruktur (Teamcity,
				Bitbucket, Jira, Confluence, ..)
			</li>
			<li>Moderator und Koordinator des DevOps Teams</li>
			<li>Qualitätssicherung der Software nach stand der Technik (Unit-Test, ...)</li>
			<li>
				Entwicklung einer Bedienoberfläche für Zahnradschählmaschinen (Sinumerik, .NET, WPF, ..)
			</li>
			<li>Entwicklung einer Maschinenparametrisierungssoftware (.NET, WPF, ..)</li>
			<li>Mentor für DevOps Systeme (Beratungen, Hilfestellungen, Schulungen)</li>
			<li>Arbeiten in einem agilen Projekt</li>
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
			<li>Verantwortlicher für DevOps (Azure Devops)</li>
			<li>Fachliche Verantwortung für die Entwicklungsarbeiten</li>
			<li>
				Entwickeln eines leistungsfähigen Konzepts, für die Aufnahme und Wiedergabe von Dataströmen
				im edge Netzwerk (BigData, DDS, ..)
			</li>
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
			<li>
				Entwickeln einer Software zur Koordination, Orchestrierung, Tracking und Überwachung von
				Cyberphysischen Systemen in Trainingsdorfer/Simulatoren (.NET, WPF, Unity 3D, ..)
			</li>
			<li>Entwicklen von Software Architektur und Konzeptdokumentationen</li>
			<li>Verantwortlicher für DevOps (Azure Devops)</li>
			<li>
				Funktionstests der Software und Sicherstellung der Softwarequalität und Guidlines mittels
				Unit-Tests, TestAutomation und Codereviews
			</li>
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
			<li>
				Entwicklung einer Bedienoberfläche für Zahnradschleifmaschinen (Sinumerik, .NET, WPF, ..)
			</li>
			<li>
				Entwicklung diverser Lösungen für z. B.:
				<ul>
					<li>ein Analyse Tool für den Sinumerik NC-Code um die Qualität zu gewährleisten</li>
					<li>eine Software zur Textverwaltung um das Übersetzen der Software zu vereinfachen</li>
				</ul>
			</li>
			<li>
				Verantwortlicher für den Aufbau einer DevOps Infrastruktur (z.B Continious Integration,
				Wissensdatenbank, Issue Tracking, Web-Hosting)
			</li>
			<li>Arbeiten in einem agilen Team</li>
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
			<li>Zusammenbauen und testen von Schaltkreisen</li>
			<li>Entwickeln von Echzeit-Software für Microprozessoren</li>
			<li>Messen und testen von Schaltkreisen</li>
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

			ul {
				margin-left: 20px;
			}
		}
	}
</style>
