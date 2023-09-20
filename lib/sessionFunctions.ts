import { cellI, companyT } from '@/store/interfaces/cell'
import { sessionReducerI, setCompanyPopup } from '@/store/reducers/session'
import { random } from '@/lib/commonFunctions'
import { diceResultI } from '@/store/interfaces/dice'
import { sessionI } from '@/store/interfaces/session'
import { userI } from '@/store/interfaces/user'
import { dataOfFunctionI, getActionChance } from '@/store/firestore/actionFunctions'

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
	dicesResult.forEach(value => (totalResultOfDices += value))

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

	console.log('getCurrentPlayerCell', currentCell.data.type)

	return {
		playerPosition,
		currentCell,
	}
}

// action helper
export interface actionObjectOfFunctionReturnObjectI {
	sessionData: sessionReducerI
	changedTurnPlayer: boolean
}
export type actionObjectOfFunctionReturnI = Promise<actionObjectOfFunctionReturnObjectI | void>

interface actionObjectOfFunctionsI {
	onCommon?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	onUncommon?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	onTax?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	onChance?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	// corners
	onPrison?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	onPoliceman?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	onStart?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
	onDices?: (data: dataOfFunctionI) => actionObjectOfFunctionReturnI
}

export const actionHelper = (
	sessionData: sessionReducerI,
	currentPlayer: userI,
	objectOfFunctions: actionObjectOfFunctionsI
) => {
	const currentPlayerCell = getCurrentPlayerCell(sessionData, currentPlayer)
	if (!currentPlayerCell) return console.error('actionHelper error')
	const cell = currentPlayerCell.currentCell.data

	const functionData: dataOfFunctionI = {
		sessionData,
		currentPlayer,
		currentPlayerCell,
		isLocal: true,
	}

	console.log(cell.type)

	if (cell.type === 'common' && objectOfFunctions.onCommon) return objectOfFunctions.onCommon(functionData)
	else if (cell.type === 'uncommon' && objectOfFunctions.onUncommon) return objectOfFunctions.onUncommon(functionData)
	else if (cell.type === 'tax' && objectOfFunctions.onTax) return objectOfFunctions.onTax(functionData)
	else if (cell.type === 'chance' && objectOfFunctions.onChance) return objectOfFunctions.onChance(functionData)
	else if (cell.type === 'corner') {
		if (cell.extendType === 'prison' && objectOfFunctions.onPrison) return objectOfFunctions.onPrison(functionData)
		else if (cell.extendType === 'policeman' && objectOfFunctions.onPoliceman) return objectOfFunctions.onPoliceman(functionData)
		else if (cell.extendType === 'start' && objectOfFunctions.onStart) return objectOfFunctions.onStart(functionData)
		else if (cell.extendType === 'dices' && objectOfFunctions.onDices) return objectOfFunctions.onDices(functionData)
	}
}

// use actionHelper
export const actionObserver = (sessionData: sessionReducerI, currentPlayer: userI) => {
	const localSessionData = JSON.parse(JSON.stringify(sessionData))
	const objectOfFunctions: actionObjectOfFunctionsI = {
		onChance: data => getActionChance(data),
	}

	console.log('actionObserver')

	return actionHelper(localSessionData, currentPlayer, objectOfFunctions)
}
