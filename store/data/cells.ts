import {
	cellT,
	chanceI,
	commonCompanyI, companyT,
	diceI,
	policemanI,
	prisonI,
	startI,
	taxI,
	uncommonCompanyI,
} from '@/store/interfaces/cell'
import {
	adobeImage,
	alibabaImage,
	baiduImage,
	bankOfChinaImage,
	bydImage,
	chinaLifeImage,
	chinaMobileImage,
	chinaTelecomImage,
	cocaColaImage,
	haitianFlavouringAndFoodImage,
	huaweiImage,
	icbcImage,
	lenovoImage,
	netflixImage,
	pepsicoImage,
	petroChinaImage,
	pinganImage,
	realtekImage,
	sinopecImage,
	tencentImage,
	tsmcsImage,
	wanhuaImage,
	whGroupImage,
	wuliangyeYibinImage,
	wuXiAppTecImage,
	xiaomiImage,
} from '@/lib/importImage'

// common cells
const chanceCell: chanceI = {
	type: 'chance',
}
const taxCell: taxI = {
	type: 'tax',
}
const startCell: startI = {
	type: 'start',
}
const prisonCell: prisonI = {
	type: 'prison',
}
const policemanCell: policemanI = {
	type: 'policeman',
}
const diceCell: diceI = {
	type: 'dice',
}

const corners = [startCell, prisonCell, diceCell, policemanCell]

const companies: companyT[] = [
	{
		name: 'china mobile',
		image: chinaMobileImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'china telekom',
		image: chinaTelecomImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'netflix',
		image: netflixImage,
		description: '',
		type: 'uncommon',

		cost: 1000,
		quantityModifier: 1000,
	},
	{
		name: 'tencent',
		image: tencentImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'realtek',
		image: realtekImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'tsmcs',
		image: tsmcsImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'wanhua',
		image: wanhuaImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'sinopec',
		image: sinopecImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'petro china',
		image: petroChinaImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'adobe',
		image: adobeImage,
		description: '',
		type: 'uncommon',

		cost: 1000,
		quantityModifier: 1000,
	},
	{
		name: 'lenovo',
		image: lenovoImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'xiaomi',
		image: xiaomiImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'huawei',
		image: huaweiImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'icbc',
		image: icbcImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'bank of china',
		image: bankOfChinaImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'pingan',
		image: pinganImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'pepsico',
		image: pepsicoImage,
		description: '',
		type: 'uncommon',

		cost: 1000,
		quantityModifier: 1000,
	},
	{
		name: 'china life',
		image: chinaLifeImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'byd',
		image: bydImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'wiXi appTec',
		image: wuXiAppTecImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'whGroup',
		image: whGroupImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'haitian flavouring and food',
		image: haitianFlavouringAndFoodImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'wuliangye Yibin',
		image: wuliangyeYibinImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'coca cola',
		image: cocaColaImage,
		description: '',
		type: 'uncommon',

		cost: 1000,
		quantityModifier: 1000,
	},
	{
		name: 'baidu',
		image: baiduImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
	{
		name: 'alibaba',
		image: alibabaImage,
		description: '',
		type: 'common',

		cost: 1000,
		baseRentCost: 1000,
		upgradeCost: 1000,
		percentageOfRentIncrease: 1000,
	},
]

export const cells: cellT[] = []

export const generateCells = () => {
	const companiesLength = companies.length
	const quarterCompaniesLength = Math.ceil(companiesLength / 4)

	for (let i = 0; i < 4; i++) {
		cells.push(corners[i])
		for (let j = 0; j < quarterCompaniesLength; j++) {
			cells.push(companies[j * (i + 1)])
		}
	}
	console.log(cells)
}
