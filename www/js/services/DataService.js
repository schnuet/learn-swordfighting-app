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
			description: 'Die Bereiche des Körpers, welche man angreifen soll. Dazu gehören vier Körperziele und in manchen Quellen auch der Kopf.'
		},
		katana: {
			title: 'Katana, das',
			description: 'Das traditionelle japanische Langschwert'
		}, 
		daumengriff: {
			title: 'Daumengriff, der',
			description: 'Bei diesem Griff liegt der Daumen auf der Klingenmitte auf. [LINK]'
		}, 
		fiore_dei_liberi: {
			title: 'Fiore De\'i Liberi',
			description: 'Italienischer Fechtmeister des 14. Jahrhunderts von dem Fechtmanuskripte erhalten sind.'
		}, 
		deutsche_schule: {
			title: 'Deutsche Schule, die',
			description: 'Einer der zwei bekannten Stile des Kampfes mit dem Langen Schwert. Der zweite ist die italienische Schule.'
		}, 
		fechtbuch: {
			title: 'Fechtbuch, das',
			description: 'Die Bezeichnung für ein Manuskript in dem historische Kampftechniken mit dem Schwert erhalten geblieben sind. [LINK]'
		},
		fechtmeister: {
			title: 'Fechtmeister, der',
			description: 'Die Bezeichnung für eine Person von der Manuskripte erhalten sind und die selbst Fechter war, bzw. selbst diese Techniken unterrichtet hat.'
		}, 
		freikampf: {
			title: 'Freikampf, der',
			description: 'Ein sportlicher Wettkampf zwischen zwei Fechtern, welcher nach unterschiedlichen Regeln ausgetragen werden kann. Den Techniken werden aber in der Regel keine Beschränkungen auferlegt, so dass beide frei miteinander fechten können.'
		},
		fuehlen: {
			title: 'Fuehlen, das',
			description: 'Gehört zum Indes und ist eine Voraussetzung dafür, in der Bindung vom Nach zum Vor zu wechseln. [LINK]'
		},
		fuenf_woerter: {
			title: 'Fünf Wörter, die',
			description: 'Die fünf Wörter sind das Kernkonzept von Liechtenauers Lehre. Dazu gehören Vor, Nach, Indes/Fühlen, Stärke und Schwäche. [LINK]'
		},
		gambeson: {
			title: 'Gambeson, der',
			description: 'Eine gefütterte Leinenjacke oder -weste, die sowohl unter Kettenpanzer, als auch als Primärrüstung getragen werden konnte.'
		}, 
		ganzer_schritt: {
			title: 'Ganzer Schritt, der',
			description: 'Auch genannt Passierschritt. Bei diesem Schritt wird die Fußstellung gewechselt, danach ist der jeweils andere Fuß vorne. [LINK]'
		}, 
		griff: {
			title: 'Griff, der',
			description: 'Der Teil des Schwerts an dem mit der führenden Hand gegriffen wird. Ist meistens aus Holz und mit Leder überzogen oder Draht umwickelt. [LINK]'
		},
		halber_schritt: {
			title: 'Halber Schritt, der',
			description: 'Ein kurzer Schritt vorwärts mit dem führenden Fuß. Auch genannt Nachstellschritt. Dabei wird die Fußstellung nicht gewechselt. [LINK]'
		},
		hammergriff : {
			title: 'Hammergriff, der',
			description: 'Bei diesem Griff liegt der Daumen der führenden Hand auf den anderen Fingern auf. [LINK]'
		},
		hau: {
			title: 'Hau, der/Hieb, der',
			description: 'Ein Schlag mit dem Schwert. Kann in verschiedenen Varianten geschlagen werden. Soll unter Umständen auch durch das Ziel schneiden.'
		},
		heft: {
			title: 'Heft, das',
			description: 'Knauf, Griff und Parierstange eines Schwerts. [LINK]'
		},
		hut: {
			title: 'Hut, die',
			description: 'Huten sind bestimmte Positionen aus denen man sowohl angreifen als auch verteidigen kann. Sie können während eines Kampfes durchlaufen werden.'
		},
		hut_vom_tag: {
			title: 'Hut vom Tag, die',
			description: 'In dieser Hut hält man das Schwert neben seinem Kopf mit dem Ort nach oben zeigend. [LINK]'
		},
		indes : {
			title: 'Indes, das',
			description: 'Spielt sich im Moment des Klingenkontakts ab, hier kann die Verteilung von Vor und Nach wechseln. [LINK]'
		},
		italienische_schule: {
			title: 'italienische Schule, die',
			description: 'Einer der beiden bekannten Stile für das Lange Schwert. Der zweite ist die deutsche Schule.'
		},
		klinge : {
			title: 'Klinge, die',
			description: 'Der Bereich des Schwerts über dem Heft. Die Klinge kann auf einer oder auf beiden Seiten [LINK]'
		},
		knauf: {
			title: 'Knauf, der',
			description: 'Der Teil des Schwerts unter dem Griff. Am Knauf kann mit der zweiten Hand gegriffen werden. Der Knauf kann auch zu schlagen eingesetzt werden. [LINK]'
		},
		krieg: {
			title: 'Krieg, der',
			description: 'Kampfphase in der nahen Mensur. Die Klingen berühren sich bereits. Der Gegner kann jetzt, oder nach einem Schritt durch einen Hieb oder Stich getroffen werden. [LINK]'	
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
			description: 'Fechtmeister aus dem 13. oder 14. Jahrhundert. Gilt als Begründer der deutschen Schule. Von ihm ist nur ein Gedicht mit Merkversen erhalten. [LINK]'
		},
		meisterhau: {
			title: 'Meisterhau, der',
			description: 'Bezeichnung für die verborgenen Hiebe der Liechtenauer Schule.'
		},
		mensur: {
			title: 'Mensur, die',
			description: 'Bezeichnet den Abstand, in dem zwei Kämpfer zueinander stehen. [LINK]'
		},
		nach: {
			title: 'Nach, das',
			description: 'Im Nach ist man, wenn man auf eine Aktion des Gegners reagieren und sich verteidigen muss. [LINK]'
		},
		oberhau: {
			title: 'Oberhau, der',
			description: 'Ein Hieb von oben zum Kopf oder zum Hals des Gegners. Kann von beiden Seiten geschlagen werden. [LINK]'
		},
		ochs: {
			title: 'Ochs, der',
			description: 'Eine Hut in der das Schwert vor dem Kopf gehalten wird. Der Ort zeigt dabei zum Gegner. [LINK]'
		},
		ort: {
			title: 'Ort, der',
			description: 'Die Spitze des Schwerts. [LINK]'
		},
		parierstange: {
			title: 'Parierstange, die',
			description: 'Der waagrechte Teil des Schwerts über dem Griff. Macht den Kampf aus der Bindung möglich. [LINK]'
		},
		passierschritt: {
			title: 'Passierschritt, der',
			description: 'Auch genannt ganzer Schritt. Die Fußstellung wird dabei verändert. [LINK]'
		}, 
		pflug : {
			title: 'Pflug, der',
			description: 'Eine Hut. Man steht dabei mit dem Schwert neben der Hüfte. Der Ort zeigt zum Gegner. [LINK]'
		},
		quelle: {
			title: 'Quelle, die',
			description: 'In diesem Zusammenhang sind Fechtbücher gemeint, in denen Techniken historischer Kampfkünste überliefert sind. [LINK]'
		},
		ringen: {
			title: 'Ringen, das',
			description: 'Im Ringen kann ein Fechter den anderen bereits mit den Händen greifen. [LINK]'
		},
		schielhau: {
			title: 'Schielhau, der',
			description: 'Ein Meisterhau. Trifft mit der kurzen Schneide.'
		},
		schnitttest: {
			title: 'Schnitttest, der',
			description: 'Zerschneiden verschiedener Gegenstände mit einem scharfen Schwert. [LINK]'
		},
		schwaeche: {
			title: 'Schwäche, die',
			description: 'Der Bereich des Schwerts von der Mitte der Klinge bis zum Ort. Schwach in der Bindung. [LINK]'
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
			description: 'Eine Matte aus Reisstroh. Wird zusammengerollt und auf einen Pfahl gespießt um Schnittests durchzuführen.'
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
			description: 'In Vor zu sein bedeutet, die Initiative zu haben. Man agiert und der Gegner ist gezwungen zu reagieren. [LINK]'
		},
		zufechten: {
			title: 'Zufechten, das',
			description: 'Schließt alle Abstände ein, in denen sich die Klingen der beiden Gegner nicht berühren. <a href="http://google.de">[LINK]</a>'
		},
		zwerchhau: {
			title: 'Zwerchhau, der',
			description: 'Ein Meisterhau. Wird seitlich zum Kopf geschlagen.'
		} 
	};

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
		glossar : glossar
	};
	return _self;
}]);