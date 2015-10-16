angular.module('starter.services')

.factory ('Data', [function () {

	var glossar = {
		alber : {
			title: 'Alber, der',
			description: 'Eine der vier wichtigsten Huten der Liechtenauer Lehre. Der Ort zeigt dabei zum Boden.'
		},
		bindung: {
			title: 'Bindung, die',
			description: 'Zustand wenn die Klingen beider Schwerter sich berühren. Verschafft einen Gewissen Grad an Kontrolle über das Gegnerschwert. Durch Fühlen können weitere Informationen gewonnen werden.'
		},
		bloesse: {
			title: 'Blöße, die',
			description: 'Die Bereiche des Körpers, welche angriffen werden sollen. Dazu gehören vier Körperziele und in manchen Quellen auch der Kopf.'
		},
		katana: {
			title: 'Katana, das',
			description: 'Das traditionelle japanische Langschwert.'
		}, 
		daumengriff: {
			title: 'Daumengriff, der',
			description: 'Bei diesem Griff liegt der Daumen auf der Klingenmitte auf.'
		}, 
		fiore_dei_liberi: {
			title: 'Fiore De\'i Liberi',
			description: 'Italienischer Fechtmeister des 14. Jahrhunderts dessen Fechtmanuskripte erhalten sind.'
		}, 
		deutsche_schule: {
			title: 'Deutsche Schule, die',
			description: 'Einer der zwei bekannten Stile des Kampfes mit dem Langen Schwert. Der zweite ist die italienische Schule.'
		}, 
		fechtbuch: {
			title: 'Fechtbuch, das',
			description: 'Die Bezeichnung für ein Manuskript in dem historische Kampftechniken mit dem Schwert erhalten geblieben sind.'
		},
		fechtmeister: {
			title: 'Fechtmeister, der',
			description: 'Die Bezeichnung für eine Person von der Manuskripte erhalten sind und die selbst Fechter war, bzw. selbst diese Techniken unterrichtet hat.'
		}, 
		freikampf: {
			title: 'Freikampf, der',
			description: 'Ein sportlicher Wettkampf zwischen zwei Fechtern, der nach unterschiedlichen Regeln ausgetragen werden kann. Den Techniken werden in der Regel keine Beschränkungen auferlegt, so dass beide frei miteinander fechten können.'
		},
		fuehlen: {
			title: 'Fuehlen, das',
			description: 'Gehört zum Indes und ist eine Voraussetzung dafür, in der Bindung vom Nach zum Vor zu wechseln.'
		},
		fuenf_woerter: {
			title: 'Fünf Wörter, die',
			description: 'Die fünf Wörter sind das Kernkonzept von Liechtenauers Lehre. Dazu gehören Vor, Nach, Indes / Fühlen, Stärke und Schwäche.'
		},
		gambeson: {
			title: 'Gambeson, der',
			description: 'Eine gefütterte Leinenjacke oder -weste, die sowohl unter Kettenpanzer, als auch als Primärrüstung getragen werden konnte.'
		}, 
		ganzer_schritt: {
			title: 'Ganzer Schritt, der',
			description: 'Auch genannt Passierschritt. Bei diesem Schritt wird die Fußstellung gewechselt, danach ist der jeweils andere Fuß vorne.'
		}, 
		griff: {
			title: 'Griff, der',
			description: 'Der Teil des Schwerts an dem mit der führenden Hand gegriffen wird. Ist meistens aus Holz und mit Leder überzogen oder mit Draht umwickelt.'
		},
		halber_schritt: {
			title: 'Halber Schritt, der',
			description: 'Ein kurzer Schritt vorwärts mit dem führenden Fuß. Auch genannt Nachstellschritt. Dabei wird die Fußstellung nicht gewechselt.'
		},
		hammergriff : {
			title: 'Hammergriff, der',
			description: 'Bei diesem Griff liegt der Daumen der führenden Hand auf den anderen Fingern auf.'
		},
		hau: {
			title: 'Hau, der/Hieb, der',
			description: 'Ein Schlag mit dem Schwert. Kann in verschiedenen Varianten geschlagen werden. Soll unter Umständen auch durch das Ziel schneiden.'
		},
		heft: {
			title: 'Heft, das',
			description: 'Knauf, Griff und Parierstange eines Schwerts.'
		},
		hut: {
			title: 'Hut, die',
			description: 'Huten sind bestimmte Positionen aus denen man sowohl angreifen als auch verteidigen kann. Sie können während eines Kampfes durchlaufen werden.'
		},
		hut_vom_tag: {
			title: 'Hut vom Tag, die',
			description: 'In dieser Hut hält man das Schwert neben seinem Kopf mit dem Ort nach oben zeigend.'
		},
		indes : {
			title: 'Indes, das',
			description: 'Spielt sich im Moment des Klingenkontakts ab, hier kann die Verteilung von Vor und Nach wechseln.'
		},
		italienische_schule: {
			title: 'italienische Schule, die',
			description: 'Einer der beiden bekannten Stile für das Lange Schwert. Der zweite ist die deutsche Schule.'
		},
		klinge : {
			title: 'Klinge, die',
			description: 'Der Bereich des Schwerts über dem Heft. Die Klinge kann auf einer oder auf beiden Seiten geschliffen sein.'
		},
		knauf: {
			title: 'Knauf, der',
			description: 'Der Teil des Schwerts unter dem Griff. Am Knauf kann mit der zweiten Hand gegriffen werden. Der Knauf kann auch zum Schlagen eingesetzt werden.'
		},
		krieg: {
			title: 'Krieg, der',
			description: 'Kampfphase in der nahen Mensur. Die Klingen berühren sich bereits. Der Gegner kann jetzt, oder nach einem Schritt durch einen Hieb oder Stich getroffen werden.'	
		},
		krumphau: {
			title: 'Krumphau, der',
			description: 'Ein Meisterhau. Trifft von oben die Hände oder die Klinge des Gegners.'
		},
		kurze_schneide: {
			title: 'Kurze Schneide, die',
			description: 'Die Schneide, welche im Hammergriff zum Arm zeigt.'
		},
		lange_schneide: {
			title: 'Lange Schneide, die',
			description: 'Die Schneide, welche im Hammergriff in Richtung der geöffneten Finger zeigt.'
		},
		langes_schwert: {
			title: 'Langes Schwert, das',
			description: 'Auch genannt Anderthalbhänder oder Langschwert. Wird meist mit beiden Händen geführt, kann aber auch mit einer Hand geführt werden.'
		},
		liechtenauer: {
			title: 'Liechtenauer, Johannes',
			description: 'Fechtmeister aus dem 13. oder 14. Jahrhundert. Gilt als Begründer der deutschen Schule. Von ihm ist nur ein Gedicht mit Merkversen erhalten.'
		},
		meisterhau: {
			title: 'Meisterhau, der',
			description: 'Bezeichnung für die verborgenen Hiebe der Liechtenauer Schule.'
		},
		mensur: {
			title: 'Mensur, die',
			description: 'Bezeichnet den Abstand, in dem zwei Kämpfer zueinander stehen.'
		},
		nach: {
			title: 'Nach, das',
			description: 'Im Nach ist man, wenn man auf eine Aktion des Gegners reagieren und sich verteidigen muss.'
		},
		oberhau: {
			title: 'Oberhau, der',
			description: 'Ein Hieb von oben zum Kopf oder zum Hals des Gegners. Kann von beiden Seiten geschlagen werden.'
		},
		ochs: {
			title: 'Ochs, der',
			description: 'Eine Hut in der das Schwert vor dem Kopf gehalten wird. Der Ort zeigt dabei zum Gegner.'
		},
		ort: {
			title: 'Ort, der',
			description: 'Die Spitze des Schwerts.'
		},
		parierstange: {
			title: 'Parierstange, die',
			description: 'Der waagrechte Teil des Schwerts über dem Griff. Macht den Kampf aus der Bindung möglich.'
		},
		passierschritt: {
			title: 'Passierschritt, der',
			description: 'Auch genannt ganzer Schritt. Die Fußstellung wird dabei verändert. '
		}, 
		pflug : {
			title: 'Pflug, der',
			description: 'Eine Hut. Man steht dabei mit dem Schwert neben der Hüfte. Der Ort zeigt zum Gegner.'
		},
		quelle: {
			title: 'Quelle, die',
			description: 'In diesem Zusammenhang sind Fechtbücher gemeint, in denen Techniken historischer Kampfkünste überliefert sind.'
		},
		ringen: {
			title: 'Ringen, das',
			description: 'Im Ringen kann ein Fechter den anderen bereits mit den Händen greifen.'
		},
		schielhau: {
			title: 'Schielhau, der',
			description: 'Ein Meisterhau. Trifft mit der kurzen Schneide.'
		},
		schnitttest: {
			title: 'Schnitttest, der',
			description: 'Zerschneiden verschiedener Gegenstände mit einem scharfen Schwert.'
		},
		schwaeche: {
			title: 'Schwäche, die',
			description: 'Der Bereich des Schwerts von der Mitte der Klinge bis zum Ort. Schwach in der Bindung.'
		},
		sportfechten: {
			title: 'Sportfechten, das',
			description: 'Moderne Kampfsportart mit Degen, Florett oder Säbel.'
		},
		staerke: {
			title: 'Stärke, die',
			description: 'Bereich der Klinge von der Parierstange bis zur Klingenmitte.'
		},
		stich: {
			title: 'Stich, der',
			description: 'Ein Angriff. Stoß zum Gegner mit dem Ort.'
		},
		tatami_matte: {
			title: 'Tatami-Matte, die',
			description: 'Eine Matte aus Reisstroh. Wird zusammengerollt und auf einen Pfahl gespießt, um Schnittests durchzuführen.'
		},
		unterhau: {
			title: 'Unterhau, der',
			description: 'Ein Hieb von unten zur unteren Blöße. Kann auf beiden Seiten ausgeführt werden.'
		},
		vadi : {
			title: 'Vadi, Filippo',
			description: 'Ein italienischer Fechtmeister.'
		},
		vor: {
			title: 'Vor, das',
			description: 'Im Vor zu sein bedeutet, die Initiative zu haben. Man agiert und der Gegner ist gezwungen zu reagieren.'
		},
		zufechten: {
			title: 'Zufechten, das',
			description: 'Schließt alle Abstände ein, in denen sich die Klingen der beiden Gegner nicht berühren.'
		},
		zwerchhau: {
			title: 'Zwerchhau, der',
			description: 'Ein Meisterhau. Wird seitlich zum Kopf geschlagen.'
		} 
	};

	var lessons = [
		{
			introBgImage: 'lessons/01/01a.png',
			introText: '<h1>Schwertbegriffe</h1><p>Willkommen in der Lerntour!</p>'+ 
			'<p>Schön, dass du dich entschieden hast die alte Kunst des Schwertkampfes zu erlernen! </p>'+
			'<p>Zuerst lernst du hier, wie man die einzelnen Teile des Schwerts nennt. Damit wird es leichter für dich, die nächsten Lektionen zu verstehen und du bist reif für ein eigenes Schwert!</p>',
			outroPrizeImage: 'lessons/01/1.png',
			outroText: '<h4>Schwertbegriffe</h4>' +
					'<p>Klasse! Die erste Lektion hast du mit Bravour gemeistert!</p>'+
					'<p> Jetzt, wo du die Teile des Schwertes benennen kannst, erhältst du dein erstes eigenes Übungsschwert! </p>'+
					'<p>In der nächsten Lektion lernst du, wie du dein Schwert richtig hältst.</p>',
			outroButtonText: 'AUF ZUR LEKTION!'
		},
		{
			introBgImage: 'lessons/02/02a.png',
			introText: '<h1>Der Griff</h1>'+
					'<p>Gratulation zu deinem ersten Schwert! </p>'+
					'<p>In dieser Lektion geht es darum, wie du dein Schwert am besten hältst. <br>'+
					'Damit kannst du später beim Kämpfen auch deine ganze Kraft in einen Hieb oder eine Verteidigung legen.</p>',
			outroPrizeImage: 'lessons/02/2.png',
			outroText: '<h4>Der Griff</h4>'+				
					'<p>Super! Jetzt hast du schon die zweite Lektion geschafft! <br>'+
					'Da du jetzt weißt, wie man ein Schwert richtig hält, bekommst du diese schicken Handschuhe. Die Handschuhe schützen nicht nur deine Finger, sondern auch das Schwert.</p>'+
					'<p> Fasst du ein Stahlschwert an, kann die Feuchtigkeit deiner Finger es schnell zum Rosten bringen.</p>'+
					'<p>In der nächsten Lektion geht es mit der Bewegung los! Zuerst sind die Beine dran!</p>',
			outroButtonText: 'WEITER GEHT\'S!'
		},
		{
			introBgImage: 'lessons/03/03a.png',
			introText: '<h1>Beinarbeit</h1>'+
				'<p>Wie du dein Schwert festhältst weißt du ja schon. Zeit, dass wir uns um deine Beine kümmern!</p>'+
				'<p>Im Kampf musst du ohne viel nachzudenken immer in die richtige Position kommen. <br>Damit du dabei nicht verwundbar bist, ist es wichtig die richtigen Schritte zu kennen.</p>',
			outroPrizeImage: 'lessons/03/3.png',
			outroText: '<h4>Beinarbeit</h4>'+
				'<p>Toll! Die dritte Lektion hast du erfolgreich abgeschlossen!<br>'+
				'Inzwischen weißt du schon, wie du deine Beine bewegst! Damit du auch weiter fleißig üben kannst, erhältst du diese nagelneuen Lederstiefel!<br>'+
				'In der nächsten Lektion können wir nun auch die Haltung der Arme üben.</p>',
			outroButtonText: 'WEITER GEHT\'S!'
		},
		{
			introBgImage: 'lessons/04/04a.png',
			introText: '<h1>Huten</h1>	'+
					'<p>Die Grundlagen der Körperhaltung beherrscht du inzwischen. <br> In dieser Lektion geht es um die Ausgangspositionen, in denen du mit dem Schwert stehst. Aus diesen Positionen kannst du schnell angreifen und dich ebenso schnell verteidigen!</p>',
			outroPrizeImage: 'lessons/04/4.png',
			outroText: '<h4>Huten</h4>'+
					'<p>Gut gemacht! Du hast die vierte Lektion geschafft! <br>'+
					'Jetzt kennst du schon die vier wichtigsten Huten! <br>'+
					'Damit hast du dir diesen tollen Helm verdient! Dein Grundlagenwissen und deine Grundausstattung sind jetzt schon fast vollständig! <br>In der nächsten Lektion lernst du, woher das historische Wissen kommt, welches du dir bis jetzt angeeignet hast.</p>',
			outroButtonText: 'UND LOS!'
		},
		{
			introBgImage: 'lessons/05/05a.png',
			introText: '<h1>Quellen</h1>' +
				'<p>Was Huten sind weißt du ja schon, aber woher kommt das Wort Huten eigentlich? <br>'+
				'Hier lernst du die Ursprünge des historischen Schwertkampfes kennen. Also die Quellen, aus denen der gesamte moderne Sport abgeleitet wird. <br> Du darfst dich auch selbst an einer Interpretation versuchen!</p>',
			outroPrizeImage: 'lessons/05/5.png',
			outroText: '<h4>Quellen</h4>'+
				'<p>Beeindruckend! Das war sogar schon die fünfte Lektion! <br>'+
				'Liechtenauer ist jetzt kein Fremdwort mehr für dich! Du kennst die Wurzeln des historischen Schwertkampfes.<br>Damit du unterwegs immer in den Quellen nachlesen kannst, bekommst du diesen stabilen Schwertgürtel, an dem du auch deine Manuskripte befestigen kannst.<br>In der nächsten Lektion geht es endlich um die ersten Angriffe!</p>',
			outroButtonText: 'AUF ZUM KAMPF!'
		},
		{
			introBgImage: 'lessons/06/06a.png',
			introText: '<h1>Angriffe</h1>'+
				'<p>'+
					'Inzwischen hast du genug Grundlagenwissen angesammelt, um die ersten Angriffe zu erlernen. <br>'+
					'Angriffe sehen zunächst einfach aus, aber lass dich nicht täuschen. Um das volle Schadenspotential zu entfalten, müssen sie präzise und entschlossen ausgeführt werden.'+
				'</p>',
			outroPrizeImage: 'lessons/06/6.png',
			outroText: '<h4>Angriffe</h4>'+
					'<p>Super! Du hast die sechste Lektion abgeschlossen! <br>'+
					'Jetzt beherrscht du schon die ersten Angriffe!<br>'+
					'Dieser große Schritt Richtung Fechter verlangt nach einer ebenso großen Belohnung! Dieser Brustharnisch soll dich in Zukunft vor Angriffen schützen! <br>'+
					'In der nächsten Lektion ist Schluss mit Übungsschwertern. Es geht um den Einsatz scharfer Stahlwaffen!</p>',
			outroButtonText: 'AUF GEHT\'S!'
		},
		{
			introBgImage: 'lessons/07/07a.png',
			introText: '<h1>Schnitttests</h1>'+
					'<p>'+
						'Du kannst jetzt die ersten Angriffe durchführen. Damit bist du weit genug, um auch etwas mehr über scharfe Schwerter zu lernen.<br>'+
						'In dieser Lektion geht es darum mit scharfen Schwertern Gegenstände zu zerschneiden. Dadurch lernt man die Handhabung des Schwertes viel besser kennen als nur mit Übungsschwertern.'+
					'</p>',
			outroPrizeImage: 'lessons/07/7.png',
			outroText: '<h4>Schnitttests</h4>'+
					'<p>'+
						'Großartig! Das war schon die siebte Lektion!<br>Du weißt jetzt sogar schon, wie man mit scharfen Schwertern umgeht!<br>Damit bist du reif für dein erstes eigenes Stahlschwert! <br>Bei so viel gefährlichen Waffen darf der Schutz natürlich nicht zu kurz kommen. Deshalb geht es in der nächsten Lektion um die moderne Schutzausrüstung.'+
					'</p>',
			outroButtonText: 'VORWÄRTS!'
		},
		{
			introBgImage: 'lessons/08/08a.png',
			introText: '<h1>Schutzausrüstung</h1>'+
				'<p>Zuletzt hast du scharfe Schwerter kennen gelernt. Damit du dich auch beim Training mit Übungsschwertern nicht verletzt, sehen wir uns als nächstes an, welche Schutzausrüstung du für den historischen Schwertkampf heutzutage benötigst.</p>',
			outroPrizeImage: 'lessons/08/8.png',
			outroText: '<h4>Schutzausrüstung</h4>'+
					'<p>'+
						'Toll! Jetzt hast du auch die achte Lektion abgeschlossen!<br>Inzwischen weißt du, welche Schutzausrüstung du noch brauchen wirst und es wird Zeit sie zu vervollständigen. Dafür erhältst du diese Arm- und Beinpanzer.<br>Als nächstes können wir mit den ersten Partnerübungen loslegen und die verschiedenen Abstände in einem Kampf betrachten.'+
					'</p>',
			outroButtonText: 'WEITER GEHT\'S!'
		},
		{
			introBgImage: 'lessons/09/09a.png',
			introText: '<h1>Mensur</h1>'+
				'<p>Da du inzwischen weißt, wie du dich schützt, können wir mit den Partnerübungen beginnen. <br>In dieser Lektion geht es um die verschiedenen Abstände, die du im Kampf zu deinem Gegner haben kannst. Sie zu kennen ist wichtig um immer zu wissen, welche Distanz ein Angriff überbrücken können muss.</p>',
			outroPrizeImage: 'lessons/09/9.png',
			outroText: '<h4>Mensur</h4>'+
					'<p>'+
						'Klasse! Die neunte Lektion hast du erfolgreich abgeschlossen! <br>Jetzt kennst du sogar schon die Abstände im Gefecht! <br>Du hast die Tour schon fast abgeschlossen, daher wird es Zeit sich herauszuputzen. Dieser schicke Umhang lässt jeden deiner Gegner vor Neid erblassen!<br>In der nächsten und letzten Lektion geht es um die Grundprinzipien der Lehre Liechtenauers.'+
					'</p>',
			outroButtonText: 'AUF GEHT\'S!'
		},
		{
			introBgImage: 'lessons/10/10a.png',
			introText: '<h1>Die fünf Wörter</h1>'+
				'<p>Du bist schon beinahe ein Fechter. Was jetzt noch fehlt, sind die fünf Wörter, die eine zentrale Bedeutung für Liechtenauers Lehren haben. Kennst du diese, kannst du dich in den meisten Kampfsituationen zurecht finden und auch komplexere Techniken verstehen.</p>',
			outroPrizeImage: 'lessons/10/10.png',
			outroText: '<h4>Die fünf Wörter</h4>'+
					'<p>'+
						'Herzlichen Glückwunsch! Das war das zehnte und letzte Kapitel der Lerntour. <br>Dieses Pferd soll dich auf deinem weiteren Weg standesgemäß zu neuen Fechtlehrern tragen! Sein Name ist Plötze.<br>'+
						'Du kennst jetzt die Grundlagen des historischen Schwertkampfes der deutschen Schule. Damit bist du bestens ausgerüstet dir eine eigene Trainingsgruppe zu suchen oder Seminare von Fechtlehrern zu besuchen. <br>'+
						//'Bleib offen für neue Eindrücke! Der Schwertkampf basiert auf vielen unterschiedlichen Interpretationen der Quellen und jeder Lehrer hat seine eigene Art eine Technik auszuführen und eigene Tricks zu zeigen. Versuche, welche der Variationen dir am besten liegen und finde heraus, welcher Stil für dich am besten funktioniert.<br>'+
						'Du weißt nicht, ob es in deiner Nähe einen Verein gibt? Kein Problem.<br> <a href="https://www.google.com/maps/d/viewer?mid=z3ItaHt6Fhqs.knoxa-yaqWs8&ie=UTF8&hl=de&om=1&msa=0&z=6">Hier findest du eine Karte</a> auf der du den Verein suchen kannst, der deinem Wohnort am nächsten liegt.</p>',
			outroButtonText: 'Abschluss'
		}
	];

	var _self = {
		user : '', 
		lessonDirectories : [
			'0-null',
			'1-schwertbegriffe',
			'2-der-griff',
			'3-beinarbeit',
			'4-huten',
			'5-quellen',
			'6-angriffe',
			'7-schnitttests',
			'8-schutzausruestung',
			'9-mensur',
			'10-die-fuenf-woerter'
		], 
		glossar : glossar, 
		lessons: lessons,
		introModal: null,
		outroModal: null,
		lessonData: lessons[0],
		lessonnumber: 1,

		exitIntroButtonVisible: false
	};
	return _self;
}]);