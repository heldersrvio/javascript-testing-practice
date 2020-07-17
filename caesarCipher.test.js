import caesarCipher from './caesarCipher';

test('Caesar cipher working (1)', () => {
	expect(caesarCipher('zeitgeist', 2)).toBe('bgkvigkuv');
});

test('Caesar cipher working (2)', () => {
	expect(caesarCipher('zEiTgeIST', -4)).toBe('vAePcaEOP');
});

test('Caesar cipher working (3)', () => {
	expect(caesarCipher('zEiT!!!geIST', -4)).toBe('vAeP!!!caEOP');
});
