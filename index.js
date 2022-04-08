// DOM - Document Object Model (Modelo del Objeto documento)
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

// Variables
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

const endGame = () => {
	if (!game.started) return;

	// Decide who wins
	if (game.playerChoice === 'paper' && game.computerChoice === 'rock') {
		alert('Player 1 wins!');
		game.playerVictories += 1;
	} else if (
		game.playerChoice === 'rock' &&
		game.computerChoice === 'scissors'
	) {
		alert('Player 1 wins!');
		game.playerVictories += 1;
	} else if (
		game.playerChoice === 'scissors' &&
		game.computerChoice === 'paper'
	) {
		alert('Player 1 wins!');
		game.playerVictories += 1;
	} else if (game.playerChoice === game.computerChoice) {
		alert('Tie');
	} else {
		alert('Player 2 wins');
		game.computerVictories += 1;
	}

	// Update the victories counter
	playerVictories.innerText = game.playerVictories;
	computerVictories.innerText = game.computerVictories;

	// Reset timer HTML element
	timer.innerText = 5;

	// Remove disable class from start and reset button and disable stop button
	btnStart.classList.remove('disabled');
	btnReset.classList.remove('disabled');
	btnStop.classList.add('disabled');

	// Mark game.started as false
	game.started = false;
	game.remainingSeconds = 5;
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

// Callback/anonymous functions
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

btnRock.addEventListener('click', () => {
	removeSelectedOption();
	btnRock.classList.add('selected');
	playerChoice.src = './assets/rock.png';
	game.playerChoice = 'rock';
});

btnPaper.addEventListener('click', () => {
	removeSelectedOption();
	btnPaper.classList.add('selected');
	playerChoice.src = './assets/paper.png';
	game.playerChoice = 'paper';
});

btnScissors.addEventListener('click', () => {
	removeSelectedOption();
	btnScissors.classList.add('selected');
	playerChoice.src = './assets/scissors.png';
	game.playerChoice = 'scissors';
});

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
// 	if (seconds === 0) clearInterval(id);
// }, 1000);
