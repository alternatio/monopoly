export const colors: string[] = [
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#ffffff',
	'#ffffff'
]



export interface cellInterface {
	cardCell?: number
	companyCell?: number
	giftCell?: number
}



export interface companyInterface {
	companyID?: number
	companyName?: string
	color?: number
	property?: number
	purchasedPrice?: number
	initialSalePrice?: number

	costUpgrade?: number
	parkingPrice?: number
}



export const companies: companyInterface[] = [
	{
		companyID: 22,
		companyName: 'Ferrero',
		color: 0,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 23,
		companyName: 'Mars',
		color: 0,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 24,
		companyName: 'Nestle',
		color: 0,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 0,
		companyName: 'Nvidia',
		color: 1,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 1,
		companyName: 'Intel',
		color: 1,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 2,
		companyName: 'AMD',
		color: 1,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 3,
		companyName: 'Aeroflot',
		color: 2,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 4,
		companyName: 'Lufthansa',
		color: 2,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 5,
		companyName: 'Delta',
		color: 2,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 16,
		companyName: 'Ubisoft',
		color: 3,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 17,
		companyName: 'Valve',
		color: 3,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 18,
		companyName: 'Mojang',
		color: 3,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 9,
		companyName: 'Bose',
		color: 4,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 10,
		companyName: 'Sennheiser',
		color: 4,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 11,
		companyName: 'Burmester',
		color: 4,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 19,
		companyName: '???????????? ?? ??????????',
		color: 5,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 20,
		companyName: 'Taco bell',
		color: 5,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 21,
		companyName: 'KFC',
		color: 5,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 6,
		companyName: '??????',
		color: 6,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 7,
		companyName: 'BMW',
		color: 6,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 8,
		companyName: 'Jaguar',
		color: 6,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 12,
		companyName: 'Mobil',
		color: 7,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 13,
		companyName: 'TotalEnergies',
		color: 7,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 14,
		companyName: '??????????????',
		color: 7,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 29,
		companyName: 'Adidas',
		color: 8,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 30,
		companyName: 'Chanel',
		color: 8,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 31,
		companyName: 'Louis Vuitton',
		color: 8,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	},
	{
		companyID: 32,
		companyName: 'Nike',
		color: 8,
		purchasedPrice: 100,
		initialSalePrice: 100,
		costUpgrade: 100,
		parkingPrice: 100
	}
]

export interface CellLineInterface extends companyInterface {
	extendCellType?: string
}

export const cellLine1: CellLineInterface[] = []
export const cellLine2: CellLineInterface[] = []
export const cellLine3: CellLineInterface[] = []
export const cellLine4: CellLineInterface[] = []

let currentIDCellOfCompany = 0

for (let i = 0; i < 7; i++) {
	if (i !== 3) {
		cellLine1.push(companies[currentIDCellOfCompany])
		currentIDCellOfCompany += 1
	}
	if (i === 3)
		cellLine1.push({extendCellType: 'question'})
}


for (let i = 0; i < 7; i++) {
	if (i !== 4) {
		cellLine2.push(companies[currentIDCellOfCompany])
		currentIDCellOfCompany += 1
	}
	if (i === 4)
		cellLine2.push({extendCellType: 'question'})
}

for (let i = 0; i < 7; i++) {
	if (i !== 2) {
		cellLine3.push(companies[currentIDCellOfCompany])
		currentIDCellOfCompany += 1
	}
	if (i === 2)
		cellLine3.push({extendCellType: 'question'})
}

for (let i = 0; i < 7; i++) {
	if (i !== 5) {
		cellLine4.push(companies[currentIDCellOfCompany])
		currentIDCellOfCompany += 1
	}
	if (i === 5)
		cellLine4.push({extendCellType: 'question'})
}