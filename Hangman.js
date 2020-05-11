

	var bobsburgers = ["gene", "louise", "tina", "burger", "cheese", "lobster", "linda"];
	var currentWord = "";
	var currWrdLtrs = [];
	var numBlanks = 0;
	var answerDisplay = [];
	var wrongLtrs = [];

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;



	 newGame = function(event) 

		
		{currentWord = bubsburgers[Math.floor(Math.random() * bobsburgers.length)];
			console.log("The current word chosen is: " + currentWord); 

		
		currWrdLtrs = currentWord.split("");
			console.log("The current word's letters are: " + currWrdLtrs); 

		
		numBlanks = currWrdLtrs.length;
			console.log("The number of letters in the current word is: " + numBlanks); 

		
		guessesLeft = 9;
		wrongLtrs = [];
		answerDisplay = [];

			
			if (guessesLeft = 9) {
				document.getElementById("geneImg").removeAttribute("style");
				document.getElementById("louiseImg").removeAttribute("style");
				document.getElementById("tinaImg").removeAttribute("style");
				document.getElementById("burgerImg").removeAttribute("style");
				document.getElementById("cheeseImg").removeAttribute("style");
				document.getElementById("drinkImg").removeAttribute("style");
				document.getElementById("lobsterImg").removeAttribute("style");
				document.getElementById("lindaImg").removeAttribute("style");
			}

		
		for (i = 0; i < numBlanks; i++) {
			answerDisplay.push("_");
			console.log(answerDisplay); 
		}

		
		document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
		document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
		document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
		document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

	

	const checkLtrs = function(letter) {
		
		if (event.keyCode >= 65 && event.keyCode <= 90) { 

				
					var correctLetter = false;

					for ( var i = 0; i < numBlanks; i++) {
						if(currentWord[i] == letter) {
							correctLetter = true;
						}
					}

					
					if(correctLetter) {
						for ( var i = 0; i < numBlanks; i++) {
							if(currentWord[i] == letter) {
								answerDisplay[i] = letter;
							}
						}
					}

					
					else {
						wrongLtrs.push(letter);
						guessesLeft --
					}

					
					console.log(answerDisplay);
					
		} else { 
			alert("C'mon, let's hurry up so you can order.");
		}
	}

	const roundComplete = function () {
		console.log("Win count: " + wins +  " | Loss Count: " + losses + " | Guesses Left: " + guessesLeft)

		
		document.getElementById("remGuesses").innerHTML = "Guesses left, " + " " + guessesLeft;
		document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
		document.getElementById("guessedLetters").innerHTML = "Letters You Guessed:" + " " + wrongLtrs.join(" ");


		
		if (currWrdLtrs.toString() == answerDisplay.toString()) {
			wins++;
			alert("Sweet, we can move on now. You got '" + currentWord + "' correctly. Let's keep going. ");
			console.log("YOU WIN!");

			
			document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

			
			document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

		} else if (guessesLeft == 0) { 
			losses++;
			alert("OH NO! You have 0 guesses left, and all your friends are now in the upsidedown. The correct word was '" + currentWord + "'. Do you want to try again?")
			console.log("You Lost!");

			
			document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

			
			newGame();
			document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

		}
	}





	newGame();

	
	document.onkeyup = function(event) {
		
		var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
			console.log("You Guessed the letter: " + ltrsGuessed); 

		
		checkLtrs(ltrsGuessed);
		roundComplete();

		
		if (guessesLeft <= 8) {
			document.getElementById("geneImg").style.transform = "rotate(180deg)";
			document.getElementById("geneImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 7) {
			document.getElementById("louiseImg").style.transform = "rotate(180deg)";
			document.getElementById("louiseImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 6) {
			document.getElementById("tinaImg").style.transform = "rotate(180deg)";
			document.getElementById("tinaImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 5) {
			document.getElementById("burgerImg").style.transform = "rotate(180deg)";
			document.getElementById("burgerImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 4) {
			document.getElementById("cheeseImg").style.transform = "rotate(180deg)";
			document.getElementById("cheeseImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 3) {
			document.getElementById("drinkImg").style.transform = "rotate(180deg)";
			document.getElementById("drinkImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 2) {
			document.getElementById("lobsterImg").style.transform = "rotate(180deg)";
			document.getElementById("lobsterImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 1) {
			document.getElementById("lindaImg").style.transform = "rotate(180deg)";
			document.getElementById("lindaImg").style.opacity = "0.25";
							  }}}
