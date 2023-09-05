import { companyT } from '@/store/interfaces/cell'
import { setCompanyPopup } from '@/store/reducers/session'
import { random } from '@/lib/commonFunctions'
import { diceResultI } from '@/store/interfaces/dice'
import { sessionI } from '@/store/interfaces/session'
import { userI } from '@/store/interfaces/user'

export const setCompanyPopupHelper = (
	dispatch: Function,
	company: companyT | undefined,
	currentCompanyPopup?: companyT | null
) => {
	if (!company || currentCompanyPopup?.name === company.name) return
	dispatch(setCompanyPopup(company))
}

export const rollDice = (quantityOfDices: number = 2, maxDiceResult: number = 6): diceResultI => {
	let totalResultOfDices = 0
	const dicesResult = Array.from({ length: quantityOfDices }).map(() => {
		return random(1, maxDiceResult)
	})
	dicesResult.map(value => (totalResultOfDices += value))

	const double = new Set(dicesResult).size === 1
	return { totalResultOfDices, double, dicesResult }
}

export const checkCurrentPlayer = (sessionData: Partial<sessionI>, currentPlayer: userI) => {
	const foundPlayerIndex = sessionData?.players?.findIndex(
		player => player.data?.uid === currentPlayer.data?.uid
	)
	return foundPlayerIndex === sessionData?.playerTurn
}
