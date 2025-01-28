<script>
	import Section from './section.svelte';
</script>

<Section key="experience" title="<experience />">
	<div class="experience">
		<div class="headergrid">
			<div><b>Expert Software Engineer</b>, Reishauer AG</div>
			<div>09/2022 &mdash; present <span style="margin: 0 3pt"> | </span>Zürich, Schweiz</div>
		</div>
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
	</div>
	<div class="experience">
		<div class="headergrid">
			<div><b>Lead Software Engineer</b>, THALES (RUAG AG)</div>
			<div>12/2020 &mdash; 08/2022 <span style="margin: 0 3pt"> | </span>Bern, Schweiz</div>
		</div>
		<div class="listdiv">
			<ul class="list">
				<li>Verantwortlicher für DevOps (Azure Devops)</li>
				<li>Fachliche Verantwortung für die Entwicklungsarbeiten</li>
				<li>
					Entwickeln eines leistungsfähigen Konzepts, für die Aufnahme und Wiedergabe von
					Dataströmen im edge Netzwerk (BigData, DDS, ..)
				</li>
			</ul>
		</div>
	</div>
	<div class="experience">
		<div class="headergrid">
			<div><b>Senior Software Engineer</b>, THALES (RUAG AG)</div>
			<div>03/2020 &mdash; 11/2020 <span style="margin: 0 3pt"> | </span>Bern, Schweiz</div>
		</div>
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
	</div>
	<div class="experience">
		<div class="headergrid">
			<div><b>Software Developer</b>, Reishauer AG</div>
			<div>09/2011 &mdash; 02/2020 <span style="margin: 0 3pt"> | </span>Zürich, Schweiz</div>
		</div>
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
	</div>
	<div class="experience">
		<div class="headergrid">
			<div><b>Elektroniker Auszubildender</b>, Reishauer AG</div>
			<div>08/2007 &mdash; 07/2011 <span style="margin: 0 3pt"> | </span>Zürich, Schweiz</div>
		</div>
		<div class="listdiv">
			<ul class="list">
				<li>Zusammenbauen und testen von Schaltkreisen</li>
				<li>Entwickeln von Echzeit-Software für Microprozessoren</li>
				<li>Messen und testen von Schaltkreisen</li>
			</ul>
		</div>
	</div>
</Section>

<style lang="scss">
	.experience {
		color: silver;
        margin-top: 30pt;

		.headergrid {
			margin: 5pt 0;
			display: flex;
			display: -ms-flexbox;
			flex-flow: row wrap;
			-ms-flex-wrap: row-wrap;
			justify-content: space-between;
			-ms-flex-pack: justify;
			align-content: flex-end;
			-ms-flex-line-pack: start;
			align-items: baseline;

			:first-child {
				font-size: 12pt;
				letter-spacing: 2pt;
				b {
					font-size: 15pt;
					color: white;
				}
			}

			:last-child {
				letter-spacing: 1.5pt;
				font-size: 10pt;
			}
		}

		.listdiv {
			margin-left: 30px;

			.list {
				font-size: 12pt;
				letter-spacing: 1.2pt;
				text-align: left;

				ul {
					margin-left: 20px;
				}
			}
		}
	}
</style>
