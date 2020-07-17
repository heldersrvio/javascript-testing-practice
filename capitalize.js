const capitalize = (string) => {
	return string.length === 0
		? string.toUpperCase()
		: string[0].toUpperCase() + string.slice(1);
};

export default capitalize;
