// DOM - Document Object Model (Modelo del Objeto documento)
const btnStart = document.getElementById('btn-start');
const playerCards = document.querySelectorAll('.player-card');
const timer = document.getElementById('timer');

const startTimer = () => {
	let seconds = 5;

	setTimeout(() => {
		seconds = seconds - 1;
		timer.innerText = seconds;
		// Recursividad / Recursivity
	}, 1000);

	// Scope
	// setInterval(() => {
	// 	seconds = seconds - 1;

	// 	if (seconds >= 0) {
	// 		timer.innerText = seconds;
	// 	}

	// 	console.log('Hello');
	// 	if (seconds === 0) clearInterval(id);
	// }, 1000);
};

// Callback/anonymous functions
btnStart.addEventListener('click', () => {
	// Show the players' cards
	playerCards.forEach(element => {
		// Remove the hidden class from each element
		element.classList.remove('hidden');
	});

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
