import { random } from '@/lib/commonFunctions'
import {
	commonMixedArrayOfMoney,
	commonMixedChances,
	commonNegativeAndPositiveChances,
	commonNegativeArrayOfMoney,
	commonPositiveArrayOfMoney,
	getPossibleMoney,
} from '@/components/Session/Popups/GameActions/CellsActions/moneyData'

interface chanceTextDataI {
	money: number
	text: string
}

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

// functions of texts
const getText1 = (): chanceTextDataI => {
	const name = getPossibleName()
	const money = getPossibleMoney({
		arrayOfMoney: commonPositiveArrayOfMoney,
		chances: commonNegativeAndPositiveChances,
	})

	return {
		money,
		text: `Вы узнали, что у вас есть дальний родственник, его звали ${name}, но вы узнали о нём тогда, когда его не стало. В общем, он завещал вам кое-какое имущество. Вы получаете ${money}M¥`,
	}
}

const getText2 = (): chanceTextDataI => {
	const money = getPossibleMoney({
		arrayOfMoney: commonPositiveArrayOfMoney,
		chances: commonNegativeAndPositiveChances,
	})

	return {
		money,
		text: `Вы нашли на дороге какую-то мелочь. Вы получаете ${getPossibleMoney({
			arrayOfMoney: [50, 100, 150, 200, 250, 500],
			chances: commonNegativeAndPositiveChances,
		})}M¥`,
	}
}

const getText3 = (): chanceTextDataI => {
	const name = getPossibleName()
	const money = getPossibleMoney({
		arrayOfMoney: commonMixedArrayOfMoney,
		chances: commonMixedChances,
	})

	return {
		money,
		text: `Ваш знакомый по имени ${name} затеял маленькую аферу, вы вместе её проворачиваете и получаете такой итог: ${money}M¥`,
	}
}

const getText4 = (): chanceTextDataI => {
	const name = getPossibleName()
	const money = getPossibleMoney({
		arrayOfMoney: commonMixedArrayOfMoney,
		chances: commonMixedChances,
	})

	return {
		money,
		text: `Вы вложились в акции одной компании по рекомендации вашего знакомого – ${name}. Спустя некоторое время вы видите такой итог: ${money}M¥`,
	}
}

const getText5 = (): chanceTextDataI => {
	const money = getPossibleMoney({
		arrayOfMoney: commonNegativeArrayOfMoney,
		chances: commonNegativeAndPositiveChances,
	})

	return {
		money,
		text: `Вас обокрали, просто ни с чего обокрали. (${money}M¥)`,
	}
}

export const arrayOfMoneyTexts = [getText1, getText2, getText3, getText4, getText5]

// export const get
