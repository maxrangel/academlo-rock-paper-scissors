// DOM - Document Object Model (Modelo del Objeto documento)
const btnStart = document.getElementById('btn-start');
const playerCards = document.querySelectorAll('.player-card');

// Callback/anonymous functions
btnStart.addEventListener('click', () => {
	// Show the players' cards
	playerCards.forEach(element => {
		// Remove the hidden class from each element
		element.classList.remove('hidden');

		console.log(element.classList);
	});
});
