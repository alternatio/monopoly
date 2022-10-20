export interface sessionDataInterface {
	sessionID: number
	sessionName: string
	isEnd: boolean
}

export const sessionData: sessionDataInterface[] = [
	{
		sessionID: 0,
		sessionName: 'test',
		isEnd: false
	}
]