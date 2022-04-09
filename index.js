// DOM - Document Object Model (Modelo del Objeto documento)

// How to fetch an element
// document.querySelector('.class'); Get the first HTML element that finds by class
// document.querySelector('#id'); Get the first HTML element that finds by id
// document.getElementById('id')
// document.querySelectorAll('.class') Gets all elements with the given class and returns an array of elements

const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');
const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.getElementById('btn-scissors');
const playerChoice = document.getElementById('player-1-option');
const computerChoice = document.getElementById('computer-choice');
const playerVictories = document.getElementById('player-victories');
const computerVictories = document.getElementById('computer-victories');
const playerCards = document.querySelectorAll('.player-card');
const timer = document.getElementById('timer');

// Game obj
const game = {
	started: false,
	playerChoice: 'paper',
	computerChoice: 'rock',
	remainingSeconds: 5,
	playerVictories: 0,
	computerVictories: 0,
};

// Default parameters
const startTimer = (seconds = 5) => {
	setTimeout(() => {
		const remainingSeconds = seconds - 1;
		game.remainingSeconds = remainingSeconds;

		// Recursividad / Recursivity
		if (remainingSeconds >= 0 && game.started) {
			timer.innerText = remainingSeconds;
			startTimer(remainingSeconds);
		} else {
			endGame();
		}
	}, 1000);
};

const chooseWinner = winner => {
	if (winner === 'player') {
		// PLayer wins
		alert('Player 1 wins!');
		game.playerVictories += 1;
		playerVictories.innerText = game.playerVictories;
	} else if (winner === 'computer') {
		// PLayer wins
		alert('Player 2 wins!');
		game.computerVictories += 1;
		computerVictories.innerText = game.playerVictories;
	}
};

const endGame = () => {
	if (!game.started) return;

	// Decide who wins
	if (game.playerChoice === 'paper' && game.computerChoice === 'rock')
		chooseWinner('player');
	else if (game.playerChoice === 'rock' && game.computerChoice === 'scissors')
		chooseWinner('player');
	else if (game.playerChoice === 'scissors' && game.computerChoice === 'paper')
		chooseWinner('player');
	else if (game.playerChoice === game.computerChoice) {
		alert('Tie');
	} else chooseWinner('computer');

	// Reset timer HTML element
	timer.innerText = 5;
	game.remainingSeconds = 5;

	// Remove disable class from start and reset button and disable stop button
	btnStart.classList.remove('disabled');
	btnReset.classList.remove('disabled');
	btnStop.classList.add('disabled');

	// Mark game started as false
	game.started = false;
};

const startRandomComputerChoice = () => {
	setTimeout(() => {
		// Generate random number between 1-3
		const randomOption = Math.floor(Math.random() * 3) + 1;

		// 1 - Rock
		// 2 - Paper
		// 3 - Scissors

		// Change the computer choice based on the random number generated
		if (randomOption === 1) {
			computerChoice.src = './assets/rock.png';
			game.computerChoice = 'rock';
		} else if (randomOption === 2) {
			computerChoice.src = './assets/paper.png';
			game.computerChoice = 'paper';
		} else if (randomOption === 3) {
			computerChoice.src = './assets/scissors.png';
			game.computerChoice = 'scissors';
		}

		// When timer reaches to 0, stop random choice
		if (game.remainingSeconds > 0 && game.started) startRandomComputerChoice();
	}, 100);
};

const startGame = () => {
	game.started = true;

	btnStart.classList.add('disabled');
	btnStop.classList.remove('disabled');
	btnReset.classList.add('disabled');

	// Start random computer choice
	startRandomComputerChoice();
};

const removeSelectedOption = () => {
	const currentSelected = document.querySelector('.selected');

	if (currentSelected) currentSelected.classList.remove('selected');
};

// Events listeners
// We can set events to our HTML elements and tell them to do something

// Callback/anonymous functions
// A callback function is a function that is waiting to be executed, it doesn't execute immediately
btnStart.addEventListener('click', () => {
	if (game.started) return;

	// Show the players' cards
	playerCards.forEach(element => {
		// Remove the hidden class from each element
		element.classList.remove('hidden');
	});

	startGame();
	startTimer();
});

const optionClickHandler = event => {
	const option = event.target.dataset.option;

	removeSelectedOption();

	event.target.classList.add('selected');

	playerChoice.src = `./assets/${option}.png`;
	game.playerChoice = option;
};

// Player's choice handlers
btnRock.addEventListener('click', optionClickHandler);
btnPaper.addEventListener('click', optionClickHandler);
btnScissors.addEventListener('click', optionClickHandler);

// Cancel the game
btnStop.addEventListener('click', () => {
	if (!game.started) return;

	game.started = false;

	// Hide the players' cards
	playerCards.forEach(element => {
		// Add the hidden class from each element
		element.classList.add('hidden');
	});

	// Disable stop btn
	btnStart.classList.remove('disabled');
	btnReset.classList.remove('disabled');
	btnStop.classList.add('disabled');

	// Reset timers
	timer.innerHTML = 5;
	game.remainingSeconds = 5;
});

btnReset.addEventListener('click', () => {
	if (game.started) return;

	const userAnswer = prompt('Are you sure? (y/n)');

	if (userAnswer === 'n') {
		alert('Game has not been reseted');
	} else if (userAnswer === 'y') {
		// Reset victories counters
		game.playerVictories = 0;
		game.computerVictories = 0;

		// Update the HTML
		playerVictories.innerText = 0;
		computerVictories.innerText = 0;
		alert('Game has been reseted');
	} else {
		alert('Only input y or n for yes or no');
	}
});

// Most used events: click, change, focus, blur, keypress

// 1s = 1000 ms
// Executes only when the specified time has passed
// setTimeout(() => {
// 	console.log('Code activated');
// }, 3000);

// Executes at a specified time interval
// setInterval(() => {
// 	console.log('Code activated');
// }, 1000);

// Timer solution proposal #1 (Not recommended)
// setInterval(() => {
// 	seconds = seconds - 1;

// 	if (seconds >= 0) {
// 		timer.innerText = seconds;
// 	}

// 	console.log('Hello');
// 	// if (seconds === 0) clearInterval(id);
// }, 1000);
