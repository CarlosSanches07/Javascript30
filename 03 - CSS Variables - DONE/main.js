const inputs = document.querySelectorAll('input');

function handleUptade () {
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUptade));
inputs.forEach(input => input.addEventListener('mousemove', handleUptade));
