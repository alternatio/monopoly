import { commonCompanyI, uncommonCompanyI } from '@/store/interfaces/cell'

export const getTotalRent = (cellData: commonCompanyI | uncommonCompanyI) => {
	let totalRent = 0
	if (cellData.type === 'common') {
		let percents = 0
		if (cellData.numberOfImprovements) {
			const baseRentOnePercent = cellData.baseRentCost / 100
			console.log(Math.exp(cellData.numberOfImprovements))
			const exponential =
				Math.exp(cellData.numberOfImprovements) *
				cellData.multiplierForImprovements
			percents = exponential * baseRentOnePercent
		}
		totalRent = Math.ceil(cellData.baseRentCost + percents)
		return totalRent
	} else if (cellData.type === 'uncommon') {
		let percents = 0

		return totalRent
	} else {
		return totalRent
	}
}

export const getTotalUpgradeCost = (cellData: commonCompanyI) => {
	let totalUpgradeCost
}
