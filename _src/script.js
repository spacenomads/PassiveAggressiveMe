const TEXT = `Alfred Workflow to add a passive-aggressive tone to any text as seen in this Instagram reel`;

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCase(char) {
	const format = [0, 0, 1];
	const MIN = 0;
	const random = getRandomNumber(MIN, format.length);
	return format[random] === 0 ? char.toLowerCase() : char.toUpperCase();
}

function passiveAggressiveMe(str) {
	return str
		.split('')
		.map(randomCase)
		.join('');
}

console.log(passiveAggressiveMe(TEXT.trim()));