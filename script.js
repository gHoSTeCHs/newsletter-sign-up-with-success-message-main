// Iitializing varibles and selecors
const form = document.querySelector('.mailForm');
const input = document.querySelector('input');
const validate = document.querySelector('.validate');
const card = document.querySelector('.card');
const emailspan = document.querySelector('.emailspan');
const complete = document.querySelector('.complete');
const dismissBtn = document.getElementById('dismissBtn');
const emailInput = document.querySelector('.emailInput');

// Checking if email is valid for every input or keystroke
emailInput.addEventListener('input', () => {
	function validateEmail(emailInput) {
		// REGEX
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailInput.value);
	}
	//
	if (validateEmail(emailInput) === false) {
		emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
		validate.style.display = 'block';
	} else {
		emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
		validate.style.display = 'none';
	}
	//
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	function validateEmail(emailInput) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailInput.value);
	}

	if (input.value == '') {
		console.log('Please enter an email address');
	} else if (validateEmail(input) === false) {
		emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
		validate.style.display = 'block';
	} else {
		card.style.display = 'none';
		emailspan.textContent = input.value;
		complete.style.display = 'block';
	}
	//
});

dismissBtn.addEventListener('click', () => {
	input.value = '';
	complete.style.display = 'none';
	card.style.display = 'flex';
});
