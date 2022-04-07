// DOM - Document Object Model (Modelo del Objeto documento)
const btnStart = document.getElementById('btn-start');
const playerCards = document.querySelectorAll('.player-card');
const timer = document.getElementById('timer');

// Variables
const game = {
	started: false,
};

// Default parameters
const startTimer = (seconds = 5) => {
	setTimeout(() => {
		const remainingSeconds = seconds - 1;

		// Recursividad / Recursivity
		if (remainingSeconds >= 0) {
			timer.innerText = remainingSeconds;
			startTimer(remainingSeconds);
		}
	}, 1000);
};

// Callback/anonymous functions
btnStart.addEventListener('click', () => {
	if (game.started) return;

	// Show the players' cards
	playerCards.forEach(element => {
		// Remove the hidden class from each element
		element.classList.remove('hidden');
	});

	game.started = true;
	startTimer();
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
