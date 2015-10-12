angular.module('starter.directives')

.directive('gameQuellen', ['$ionicGesture', 'Campaign', 'GameHelper', 'Feedback', '$timeout', '$q',
function($ionicGesture, Campaign, GameHelper, Feedback, $timeout, $q) {

	return {
		restrict: 'E',
		replace: false,

		link: function($scope, $element, $attributes) {

			$scope.game = {};

			var questions = [
				{
					text: '| do schick dich also mit | Stee mit dem lincken fuess vor vñ halt dein swert neben deiner rechten seittñ mit dem gehültz vor dem haubt das dein dawmen vnder dem swert sey | vnd heng ÿm den ort gegen dem gesicht',
					help: 'Steh mit dem linken Fuß vor und halt dein Schwert neben deiner rechten Seite mit dem Gehilz vor den Kopf, so daß sich dein Daumen unter dem Schwert befindet. Häng ihm den Ort zum Gesicht.',
					question: 'Welche Hut wird hier beschrieben?',
					answers: ['Ochs', 'Alber', 'Pflug', 'Vom Tag'],
					rightAnswer : 'Ochs'
				},
				{
					text: '| Junck ritter lere | Got lieb haben frawen | Jü ere | So wechst dein ere | vbe° ritterschafft vnd lere | kunst die dich zÿret | vnd in kriegen | zu° eren hofieret | Ringe~s gu°t fesser glefen sper swert | vnd messer | Mandleich bederbñ | vnd In anderñ henden verderben | Haw drein | vnd hürtt dar | Rausch hin trif oder la faren | Das in die weysen | hassen die man sicht preÿsen',
					help: 'Junger Ritter, lern, Gott zu lieben und die Damen zu ehren, so vergrößert sich deine Ehre. Üb Ritterehre und erlern die Kunst, die dich schmückt und dir im Kampf ehrenvoll schmeichelt. Halt gut mit Ringen; verwende geschickt Lanze, Speer, Schwert und Messer, die in anderen Händen nutzlos sind. Schlag zu und greif an, stürm heran, triff oder laß geschehen. So werden dich die Weisen beneiden, die man lobpreisen sieht.',
					question: 'Welche Kampftechniken und Waffen soll ein junger Ritter erlernen?',
					answers: ['Ringe, Schwert, Messer, Speer, Morgenstern', 
								'Schwert, Streitkolben, Lanze, Ringen, Messer', 
								'Ringen, Lanze, Speer, Schwert, Messer', 
								'Lanze, Dolch, Speer, Reitersäbel, Bogen'],
					rightAnswer : 'Ringen, Lanze, Speer, Schwert, Messer'
				},
				{
					text: 'Merck das ist ein ler | vnd trift an zwo person | Einem gerechten vnd einem lincken | Vnd ist | wie dw solt hauen das man dir die swech in dem swert | mit dem ersten haw nicht an gewinn | vnd das vernÿm also | wenn du mit dem zu° vechten zu ÿm kumpst pistu denn gerecht so haw mit namen den ersten haw nicht von der lincken seÿtten | wenn er ist swach | vnd magst da mit nicht wider gehalden | wenn er mit dir starck ein haut | Da von so haw von der rechten so magstu wol starck wider gehalten | vnd am swert arbaitten was dw wild',
					help: 'Dies ist eine Lektion für zweierlei Personen, nämlich Rechts- und Linkshänder. Sie behandelt, wie du schlagen sollst, damit man dir die Schwäche deines Schwertes mit dem ersten Hieb nicht unter Kontrolle bringt. Das heißt: Wenn du Rechtshänder bist und im Zufechten zu ihm kommst, schlag keinesfalls den ersten Hieb von der linken Seite, denn er ist schwach. Du kannst damit nicht gegenhalten, wenn dein Gegner gleichzeitig kräftig zuschlägt. Schlag deshalb von der rechten Seite. So kannst du stark dagegenhalten und am Schwert arbeiten, wie es dir beliebt.',
					question: 'Was wird dem Schüler geraten?',
					answers: ['Als Rechtshänder immer zuerst von rechts zuschlagen', 
						'Die Schwäche des Schwerts soll mit dem ersten Hieb unter Kontrolle gebracht werden', 
						'Man soll immer stark gegen das Schwert des Gegners halten', 
						'Wer Gerecht ist statt link gewinnt im Kampf'],
					rightAnswer : 'Als Rechtshänder immer zuerst von rechts zuschlagen'
				},
			];

			
			var gameContainer = null;

			var finishedButton = null;

			var selectedAnswer = '';
			var selectedBox = null;

			$scope.game.text = '';
			$scope.game.help = '';
			$scope.game.question = '';
			$scope.game.answers = [];
			var currentQuestion = -1;

			$scope.game.buttonText = 'Wähle Antwort...';

			var checkAnswer = function () {
				var a = selectedAnswer;
				selectedAnswer = '';
				selectedBox.removeClass('selected');
				selectedBox = null;

				if (a === questions[currentQuestion].rightAnswer) {
					Feedback.congratulation('Richtig', 'Gut gemacht.')
					.then (function () {
						
						// richtige Antwort farbig markieren
						// (TODO - Stretchgoal)

						// Überprüfe, ob es noch Fragen gibt:
						if (getNextQuestion() === false) { 
							// Spiel gewonnen!
							Campaign.addEnd();
							finishedButton.addClass('hidden');
							gameContainer.addClass('resolved');
							GameHelper.activateScrolling();
							Feedback.congratulation('Herzlichen Glückwunsch!', 'Die Huten scheinst du drauf zu haben! Das Spiel ist bestanden.');
						}
					});
				}
				else {
					Feedback.sorry('Leider Falsch', 'Das war nicht ganz die richtige Antwort. Versuchs noch mal.')
					.then (function () {
						
					});
				}
			};

			$scope.game.showHelp = function () {
				$scope.game.help = questions[currentQuestion].help;
			};

			var getNextQuestion = function () {
				selectedAnswer = '';
				$scope.game.help = '';
				
				currentQuestion++;
				// return false if all questions were already answered.
				if (currentQuestion === questions.length) {
					$scope.game.text = '';
					$scope.game.question = '';
					$scope.game.answers = [];
					return false;
				}

				$scope.game.text = questions[currentQuestion].text;
				$scope.game.question = questions[currentQuestion].question;
				$scope.game.answers = scrambleAnswers(questions[currentQuestion].answers);
				finishedButton[0].disabled = true;
				$scope.game.buttonText = 'Wähle eine Antwort...';
			};

			var scrambleAnswers = function (answers) {
				var nAnswers = [];
				var i = answers.length;
				while(i--) {
					// get one random part of possible Huten, delete it from the others.
					nAnswers.push(answers.splice(Math.floor(Math.random() * (answers.length)), 1)[0]);
				}
				return nAnswers;
			};

			$scope.game.selectAnswer = function (e) {
				// if there is already a selected answer:
				if (selectedBox !== null) {
					selectedBox.removeClass('selected');
				}
				selectedBox = angular.element(e.target);
				selectedBox.addClass ('selected');
				selectedAnswer = e.target.innerText || e.target.textContent;
				console.log(selectedAnswer);
				finishedButton[0].disabled = false;
				$scope.game.buttonText = 'Frage beantworten';
			};

			$scope.game.start = function () {
				// hide the instruction screen
				document.getElementById('preGameScreen').className = 'hidden';
				gameContainer = angular.element($element[0].getElementsByClassName('game-container')[0]);

				// stop the sliding of the page slider
				GameHelper.deactivateScrolling();
				$scope.vars.slideEnabled = false;

				finishedButton = angular.element(document.getElementById('finishedButton'));

				finishedButton.on('click', checkAnswer);
				getNextQuestion();
			};

			/*
				prevent dragging of page slider:
			*/
			var pageSlider = GameHelper.getPageSlider();
			$ionicGesture.on('touch', GameHelper.preventSlide, $element);
			

			$scope.$on('$destroy', function() {
				$element.remove();
			});

		}
	};
}]);