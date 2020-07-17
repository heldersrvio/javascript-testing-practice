const arrayAnalyse = (array) => {
	return {
		average: array.reduce(
			(previous, current) => previous + current / array.length,
			0
		),
		min: array.reduce(
			(previous, current) => (current < previous ? current : previous),
			array[0]
		),
		max: array.reduce(
			(previous, current) => (current > previous ? current : previous),
			array[0]
		),
		length: array.length,
	};
};

export default arrayAnalyse;
