import { extendedRandom } from '@/lib/commonFunctions'

interface getPossibleMoneyConfigI {
	chances: number[]
	arrayOfMoney: number[]
}

export const commonPositiveArrayOfMoney = [250, 500, 750, 1000, 1500, 3000]
export const commonNegativeArrayOfMoney = [-250, -500, -750, -1000, -1500, -3000]
export const commonMixedArrayOfMoney = [-2500, -1000, -250, 250, 1000, 2500]

export const commonNegativeAndPositiveChances = [30, 45, 60, 85, 95, 100]
export const commonMixedChances = [5, 20, 50, 80, 95, 100]

export const getPossibleMoney = (
	config: getPossibleMoneyConfigI
) => {
	return config.arrayOfMoney[extendedRandom(config.chances)]
}
