import arrayAnalyze from './arrayAnalyze';
import arrayAnalyse from './arrayAnalyze';

test('Array analyze working (1)', () => {
	expect(arrayAnalyse([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('Array analyze working (2)', () => {
	expect(arrayAnalyse([4, 50, -6])).toEqual({
		average: 16,
		min: -6,
		max: 50,
		length: 3,
	});
});
