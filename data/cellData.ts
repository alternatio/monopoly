export interface cellDataInterface {
	id: number
	nameCell: string

	purchasePrice: number
	salePrice: number

	parkingPriceLevel1: number
	parkingPriceLevel2: number
	parkingPriceLevel3: number
}

export const cellsData: cellDataInterface[] = [
	{
		id: 0,
		nameCell: 'Pagani',
		purchasePrice: 500,
		salePrice: 250,
		parkingPriceLevel1: 50,
		parkingPriceLevel2: 100,
		parkingPriceLevel3: 150
	},
	{
		id: 1,
		nameCell: 'Lamborghini',
		purchasePrice: 750,
		salePrice: 500,
		parkingPriceLevel1: 75,
		parkingPriceLevel2: 125,
		parkingPriceLevel3: 175
	}
]