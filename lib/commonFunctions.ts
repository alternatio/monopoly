export const random = (min: number, max: number) => {
	return Math.round(Math.random() * (max - min) + min)
}

export const createUID = (length: number = 16) => {
	const arrayOfASCII = [
		[49, 57],
		[65, 90],
		[97, 122],
	]
	let UID: string = ''

	for (let i = 0; i < length; i++) {
		const width = arrayOfASCII[random(0, arrayOfASCII.length - 1)]
		const char = String.fromCharCode(random(width[0], width[1]))
		UID += char
	}

	return UID
}
