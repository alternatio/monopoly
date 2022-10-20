export const createToken: Function = (multiplier?: number):string => {
	const randomize = () => Math.random().toString(36)
	let token = ''

	if (multiplier) {
		for (let i = 1; i < multiplier; i++) {
			token += randomize()
		}
	} else {
		token = randomize()
	}
	return token
}