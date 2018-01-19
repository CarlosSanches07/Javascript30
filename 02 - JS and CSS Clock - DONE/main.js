const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

function setDate() {
	const now = new Date();
	
	const seconds = now.getSeconds();
	const degreeSeconds = ((seconds / 60) * 360) + 90;
	
	const minutes = now.getMinutes();
	const degreeMinutes = ((minutes / 60) * 360) + 90;
	
	const hours = now.getHours();
	degreeHours = ((hours / 12) * 360) + 90;
	
	secondsHand.style.transform = `rotate(${degreeSeconds}deg)`;
	minutesHand.style.transform = `rotate(${degreeMinutes}deg)`;
	hoursHand.style.transform = `rotate(${degreeHours}deg)`;
}

setInterval(setDate, 1000);