import { cellI, companyT } from '@/store/interfaces/cell'
import { sessionReducerI, setCompanyPopup } from '@/store/reducers/session'
import { random } from '@/lib/commonFunctions'
import { diceResultI } from '@/store/interfaces/dice'
import { sessionI } from '@/store/interfaces/session'
import { userI } from '@/store/interfaces/user'
import { dataOfFunctionI } from '@/store/firestore/actionFunctions'

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
	const foundPlayerIndex = sessionData?.players?.findIndex(player => player.data?.uid === currentPlayer.data?.uid)
	return foundPlayerIndex === sessionData?.playerTurn
}

export const getCellName = (sessionData: Partial<sessionReducerI>, position: number) => {
	if (sessionData.maxMoves === undefined || !sessionData.cells?.length) return
	const indexOfCell = position % sessionData.maxMoves
	const cell = sessionData.cells[indexOfCell]

	if (cell.data.type === 'common' || cell.data.type === 'uncommon') return cell.data.name
	else if (cell.data.type === 'tax') return 'Налог'
	else if (cell.data.type === 'chance') return 'Шанс'
	else if (cell.data.type === 'corner') return cell.data.extendType
	else return '"Неизвестное_название_клетки"'
}

export interface currentPlayerCellI {
	playerPosition: number
	currentCell: cellI
}

export const getCurrentPlayerCell = (sessionData: sessionReducerI, currentPlayer: userI): currentPlayerCellI | null => {
	if (!currentPlayer?.gameData) return null
	const playerPosition = currentPlayer.gameData.position % sessionData.maxMoves
	const currentCell = sessionData.cells[playerPosition]

	return {
		playerPosition,
		currentCell,
	}
}

// action helper
interface getTypeActionObjectOfFunctionsI {
	onCommon?: (data: dataOfFunctionI) => sessionReducerI | null
	onUncommon?: (data: dataOfFunctionI) => sessionReducerI | null
	onTax?: (data: dataOfFunctionI) => sessionReducerI | null
	onChance?: (data: dataOfFunctionI) => sessionReducerI | null
	// corners
	onPrison?: (data: dataOfFunctionI) => sessionReducerI | null
	onPoliceman?: (data: dataOfFunctionI) => sessionReducerI | null
	onStart?: (data: dataOfFunctionI) => sessionReducerI | null
	onDices?: (data: dataOfFunctionI) => sessionReducerI | null
}

export const actionHelper = (
	sessionData: sessionReducerI,
	currentPlayer: userI,
	objectOfFunctions: getTypeActionObjectOfFunctionsI
) => {
	const currentPlayerCell = getCurrentPlayerCell(sessionData, currentPlayer)
	if (!currentPlayerCell) return false
	const data = currentPlayerCell.currentCell.data

	const functionData: dataOfFunctionI = {
		sessionData,
		currentPlayer,
		currentPlayerCell,
	}

	if (data.type === 'common' && objectOfFunctions.onCommon) objectOfFunctions.onCommon(functionData)
	if (data.type === 'uncommon' && objectOfFunctions.onUncommon) objectOfFunctions.onUncommon(functionData)
	if (data.type === 'tax' && objectOfFunctions.onTax) objectOfFunctions.onTax(functionData)
	if (data.type === 'chance' && objectOfFunctions.onChance) objectOfFunctions.onChance(functionData)
	if (data.type === 'corner') {
		if (data.extendType === 'prison' && objectOfFunctions.onPrison) objectOfFunctions.onPrison(functionData)
		if (data.extendType === 'policeman' && objectOfFunctions.onPoliceman) objectOfFunctions.onPoliceman(functionData)
		if (data.extendType === 'start' && objectOfFunctions.onStart) objectOfFunctions.onStart(functionData)
		if (data.extendType === 'dices' && objectOfFunctions.onDices) objectOfFunctions.onDices(functionData)
	}
}
