// adding chars to array
const addingChars: Function = (): string[] => {
	const chars: string[] = []
	for (let i = 49; i < 58; i++)
		chars.push(String.fromCharCode(i))
	for (let i = 65; i < 91; i++)
		chars.push(String.fromCharCode(i))
	for (let i = 97; i < 123; i++)
		chars.push(String.fromCharCode(i))
	return chars
}

// Randomize chars in string
// Default size token = 24
export const createToken: Function = (multiplier: number = 24):string => {
	const chars = addingChars()
	let token = ''
	for (let j = 0; j < multiplier; j++)
		token += chars[Math.round(Math.random() * (chars.length - 1))]

	return token
}