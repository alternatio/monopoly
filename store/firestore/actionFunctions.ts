import { sessionReducerI } from '@/store/reducers/session'
import { userI } from '@/store/interfaces/user'
import { currentPlayerCellI } from '@/lib/sessionFunctions'
import {getRandomChanceData} from "@/components/Session/Popups/GameActions/CellsActions/chanceData";
import {pushMessage, setItemInFirestore} from "@/store/firestore/controller";

export interface dataOfFunctionI {
	sessionData: sessionReducerI
	currentPlayer: userI
	currentPlayerCell: currentPlayerCellI
}

export const getActionChance = async (data: dataOfFunctionI) => {
	let sessionData: sessionReducerI | undefined = JSON.parse(JSON.stringify(data.sessionData))
	if (!sessionData?.sessionDataStore?.players) return

	const currentPlayerIndex = sessionData.sessionDataStore.players?.findIndex(player => player.data?.uid === data.currentPlayer.data?.uid)
	if (!currentPlayerIndex || currentPlayerIndex < 0) return
	const currentPlayer = sessionData.sessionDataStore.players[currentPlayerIndex]
	if (!currentPlayer.data?.name || !currentPlayer.gameData?.color.hex) return
	const chanceData = getRandomChanceData()

	sessionData.sessionDataStore = await pushMessage(sessionData.sessionDataStore, {
		author: currentPlayer.data.name,
		system: true,
		body: `Карточка шанс: ${chanceData.text}`,
		color: currentPlayer.gameData.color.hex
	}, true)

	if (currentPlayer.gameData?.money && currentPlayer.gameData.money + chanceData.money >= 0) {

	} else {

	}

	if (!sessionData.sessionDataStore?.id) return
	await setItemInFirestore('sessions', sessionData.sessionDataStore.id, sessionData)
}
