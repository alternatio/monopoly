import { sessionReducerI } from '@/store/reducers/session'
import { userI } from '@/store/interfaces/user'
import {actionObjectOfFunctionReturnObjectI, currentPlayerCellI} from '@/lib/sessionFunctions'
import { getRandomChanceData } from '@/components/Session/Popups/GameActions/CellsActions/chanceData'
import { changeTurnPlayer, pushMessage, setItemInFirestore } from '@/store/firestore/controller'

export interface dataOfFunctionI {
	sessionData: sessionReducerI
	currentPlayer: userI
	currentPlayerCell: currentPlayerCellI
	isLocal?: true
}

export const getActionChance = async (data: dataOfFunctionI): Promise<actionObjectOfFunctionReturnObjectI | void> => {
	let changedTurnPlayer = false
	const consoleError = () => console.error('getActionChance error')
	let sessionData: sessionReducerI | undefined = JSON.parse(JSON.stringify(data.sessionData))
	if (!sessionData?.sessionDataStore?.players) return consoleError()

	// get current player in this object and check
	const currentPlayerIndex = sessionData.sessionDataStore.players?.findIndex(
		player => player.data?.uid === data.currentPlayer.data?.uid
	)
	if (currentPlayerIndex === undefined || currentPlayerIndex < 0) return consoleError()
	const currentPlayer = sessionData.sessionDataStore.players[currentPlayerIndex]
	if (!currentPlayer.data?.name || !currentPlayer.gameData?.color.hex) return consoleError()
	const chanceData = getRandomChanceData()

	// push system message
	if (!data.currentPlayer.data?.name || !data.currentPlayer.gameData) return
	sessionData.sessionDataStore = await pushMessage(
		sessionData.sessionDataStore,
		{
			author: data.currentPlayer.data.name,
			system: true,
			body: `Карточка шанс: ${chanceData.text}`,
			color: data.currentPlayer.gameData.color.hex,
		},
		true
	)

	// check player money
	// change turn player if money >= 0
	// or set popup
	if (!sessionData?.sessionDataStore || !sessionData.sessionDataStore.players) return consoleError()
	if (currentPlayer.gameData?.money && currentPlayer.gameData.money + chanceData.money >= 0) {
		currentPlayer.gameData.money += chanceData.money
		sessionData.sessionDataStore.players[currentPlayerIndex] = currentPlayer
		sessionData.sessionDataStore = await changeTurnPlayer(sessionData.sessionDataStore, true)
		changedTurnPlayer = true
	} else {
		console.log('popup')
	}
	console.log(sessionData)

	// output
	if (!sessionData.sessionDataStore?.id) return consoleError()
	if (data.isLocal) {
		return {
			sessionData,
			changedTurnPlayer,
		}
	} else await setItemInFirestore('sessions', sessionData.sessionDataStore.id, sessionData)
}
