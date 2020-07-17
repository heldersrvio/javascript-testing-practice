import reverseString from './reverseString';

test('Reverse function working (1)', () => {
	expect(reverseString('another normal day')).toBe('yad lamron rehtona');
});

test('Reverse function working (2)', () => {
	expect(reverseString('helloworld&')).toBe('&dlrowolleh');
});
