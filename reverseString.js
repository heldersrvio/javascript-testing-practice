const reverseString = (string) => {
	const firstHalf = [...string.slice(0, Math.floor(string.length / 2))];
	const secondHalf = [
		...string.slice(Math.floor(string.length / 2), string.length),
	];
	const firstHalfReversed = firstHalf.map(
		(character, index) => string[string.length - index - 1]
	);
	const secondHalfReversed = secondHalf.map(
		(character, index) => string[string.length - (index + firstHalf.length) - 1]
	);
	return firstHalfReversed.join('') + secondHalfReversed.join('');
};

export default reverseString;
