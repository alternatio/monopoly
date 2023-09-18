import { extendedRandom, random } from '@/lib/commonFunctions'
import {
	commonMixedArrayOfMoney,
	commonMixedChances,
	commonNegativeAndPositiveChances,
	commonNegativeArrayOfMoney,
	commonPositiveArrayOfMoney,
	getPossibleMoney,
} from '@/components/Session/Popups/GameActions/CellsActions/moneyData'

interface baseChanceDataI {
	text: string
	type: 'money' | 'move'
}

interface chanceMoneyData extends baseChanceDataI {
	type: 'money'
	money: number
}

interface chanceMoveData extends baseChanceDataI {
	type: 'move'
	length: number
}

type chanceDataT = chanceMoneyData | chanceMoveData

const possibleNames = [
	'Wénhuá Lì',
	'Wèidōng Zhào',
	'Xīnhuá Wú',
	'Guānghuī Huáng',
	'Ὰimín Gāo',
	'Zhìgāng Mǎ',
	'Xiǎomíng Hú',
]

const getPossibleName = () => {
	return possibleNames[random(0, possibleNames.length - 1)]
}

const getNegativeMoneyText = (money: number) => {
	const possibleMoneyText = []
}

export const getPossibleMoneyText = () => {
	const name = getPossibleName()

	const possibleMoneyText = [
		`Вы узнали, что у вас есть дальний родственник, его звали ${name}, но вы узнали о нём тогда, когда его не стало. В общем, он завещал вам кое-какое имущество. Вы получаете ${getPossibleMoney(
			{ arrayOfMoney: commonPositiveArrayOfMoney, chances: commonNegativeAndPositiveChances }
		)}M¥`,
		`Вы нашли на дороге какую-то мелочь. Вы получаете ${getPossibleMoney({
			arrayOfMoney: [50, 100, 150, 200, 250, 500],
			chances: commonNegativeAndPositiveChances,
		})}M¥`,
		`Ваш знакомый по имени ${name} затеял маленькую аферу, вы вместе её проворачиваете и получаете такой итог: ${getPossibleMoney(
			{ arrayOfMoney: commonMixedArrayOfMoney, chances: commonMixedChances }
		)}M¥`,
		`Вы вложились в акции одной компании по рекомендации вашего знакомого – ${name}. Спустя некоторое время вы видите такой итог: ${getPossibleMoney(
			{ arrayOfMoney: commonMixedArrayOfMoney, chances: commonMixedChances }
		)}M¥`,
		`Вас обокрали, просто ни с чего обокрали. (${getPossibleMoney({
			arrayOfMoney: commonNegativeArrayOfMoney,
			chances: commonNegativeAndPositiveChances,
		})}M¥)`,
	]

	const resultIndex = extendedRandom([10, 40, 55, 70, 100])
	return possibleMoneyText[resultIndex]
}

// chances: money | move (in future)
export const getRandomChanceData = (chances: number[] = [40, 100]): chanceDataT => {
	// const indexOfChance = extendedRandom(chances)
	//
	// if (indexOfChance === 0) {
	// } else if (indexOfChance === 1) {
	// }

	return {
		type: 'money',
		text: '',
		money: 100,
	}
}
