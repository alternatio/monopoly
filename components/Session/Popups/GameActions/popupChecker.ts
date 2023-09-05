import { sessionI } from '@/store/interfaces/session'
import { userI } from '@/store/interfaces/user'
import { checkCurrentPlayer } from '@/lib/sessionFunctions'

export const movePopupChecker = (
	sessionData: Partial<sessionI> | undefined,
	currentPlayer: userI
) => {
	// check started session
	if (sessionData?.totalMoves !== undefined && sessionData.totalMoves === 0) {
		if (sessionData?.players?.length !== sessionData?.maxPlayers) return false
	}
	// check us current player
	if (!sessionData || !checkCurrentPlayer(sessionData, currentPlayer)) return false
	// check player can act
	if (sessionData.playerCanAct) return false
	// output
	return true
}

export const actionPopupChecker = (
	sessionData: Partial<sessionI> | undefined,
	currentPlayer: userI
) => {
	// check started session
	if (sessionData?.totalMoves !== undefined && sessionData.totalMoves === 0) {
		if (sessionData?.players?.length !== sessionData?.maxPlayers) return false
	}
	// check us current player
	if (!sessionData || !checkCurrentPlayer(sessionData, currentPlayer)) return null
	// check player can act
	if (!sessionData?.playerCanAct) return null
	// output
	return true
}

export const awaitPopupChecker = (sessionData: Partial<sessionI> | undefined) => {
	// check started session
	if (sessionData?.totalMoves !== undefined && sessionData.totalMoves !== 0) return false
	// output
	return true
}
