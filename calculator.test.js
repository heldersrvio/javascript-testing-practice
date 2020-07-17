import calculator from './calculator';

test('Addition working', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('Subtraction working', () => {
	expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Multiplication working', () => {
	expect(calculator.multiply(10, 2)).toBe(20);
});

test('Division working', () => {
	expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});
