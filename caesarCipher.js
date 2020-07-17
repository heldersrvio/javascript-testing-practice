const caesarCipher = (stringToEncrypt, shift) => {
	const encryptUpperCaseChar = (unicode) => {
		return ((unicode - 65 + shift) % 26) + 65;
	};

	const encryptLowerCaseChar = (unicode) => {
		return ((unicode - 97 + shift) % 26) + 97;
	};

	const encryptCharacter = (character) => {
		const unicodeValue = character.charCodeAt();
		return unicodeValue > 64 && unicodeValue < 91
			? String.fromCharCode(encryptUpperCaseChar(unicodeValue))
			: unicodeValue > 96 && unicodeValue < 123
			? String.fromCharCode(encryptLowerCaseChar(unicodeValue))
			: character;
	};

	return [...stringToEncrypt].map(encryptCharacter).join('');
};

export default caesarCipher;
