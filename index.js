// DOM - Document Object Model (Modelo del Objeto documento)
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');
const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.getElementById('btn-scissors');
const playerChoice = document.getElementById('player-1-option');
const computerChoice = document.getElementById('computer-choice');

const playerCards = document.querySelectorAll('.player-card');
const timer = document.getElementById('timer');

// Variables
const game = {
	started: false,
	playerChoice: 'paper',
	remainingSeconds: 5,
};

// Default parameters
const startTimer = (seconds = 5) => {
	setTimeout(() => {
		const remainingSeconds = seconds - 1;
		game.remainingSeconds = remainingSeconds;

		// Recursividad / Recursivity
		if (remainingSeconds >= 0) {
			timer.innerText = remainingSeconds;
			startTimer(remainingSeconds);
		}
	}, 1000);
};

const startRandomComputerChoice = () => {
	setTimeout(() => {
		// Generate random number between 1-3
		// 1 - Rock
		// 2 - Paper
		// 3 - Scissors
		// Change the computer choice based on the random number generated
		// When timer reaches to 0, stop random choice
	}, 1000);
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
});

btnPaper.addEventListener('click', () => {
	removeSelectedOption();
	btnPaper.classList.add('selected');
	playerChoice.src = './assets/paper.png';
});

btnScissors.addEventListener('click', () => {
	removeSelectedOption();
	btnScissors.classList.add('selected');
	playerChoice.src = './assets/scissors.png';
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
