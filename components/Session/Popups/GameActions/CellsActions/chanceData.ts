import { extendedRandom } from '@/lib/commonFunctions'
import { arrayOfMoneyTexts } from '@/components/Session/Popups/GameActions/CellsActions/chanceTexts'

interface chanceMoneyData {
	text: string
	type: 'money'
	money: number
}

export const getPossibleMoneyText = () => {
	const resultIndex = extendedRandom([10, 40, 55, 70, 100])
	return arrayOfMoneyTexts[resultIndex]
}

// chances: money | move (in future)
export const getRandomChanceData = (): chanceMoneyData => {
	const data = getPossibleMoneyText()()
	return {
		type: 'money',
		text: data.text,
		money: data.money,
	}
}
