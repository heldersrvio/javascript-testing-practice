import capitalize from './capitalize';

test('Capitalize works (1)', () => {
	expect(capitalize('hello world')).toBe('Hello world');
});

test('Capitalize works (2)', () => {
	expect(capitalize('Again!')).toBe('Again!');
});
