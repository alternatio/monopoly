import {commonCompanyI, companyGroupI, companyT, uncommonCompanyI} from '@/store/interfaces/cell'
import { companiesImages } from '@/lib/importImage'

export const companyGroups: companyGroupI[] = [
	{
		id: 0,
		companyGroupNameEng: 'communication',
		companyGroupNameRus: 'связь',
		colorHex: '#FFBB00',
	},
	{
		id: 1,
		companyGroupNameEng: 'microelectronics',
		companyGroupNameRus: 'микроэлектроника',
		colorHex: '#44BB66',
	},
	{
		id: 2,
		companyGroupNameEng: 'oil industry',
		companyGroupNameRus: 'нефтяная промышленность',
		colorHex: '#F80833',
	},
	{
		id: 3,
		companyGroupNameEng: 'electronics',
		companyGroupNameRus: 'электроника',
		colorHex: '#08F8F8',
	},
	{
		id: 4,
		companyGroupNameEng: 'financial industry',
		companyGroupNameRus: 'финансовая индустрия',
		colorHex: '#8FFF00',
	},
	{
		id: 5,
		companyGroupNameEng: 'pharmaceuticals',
		companyGroupNameRus: 'фармацевтика',
		colorHex: '#DB00FF',
	},
	{
		id: 6,
		companyGroupNameEng: 'pharmaceuticals',
		companyGroupNameRus: 'пищевая промышленность',
		colorHex: '#FFFF00',
	},
	{
		id: 7,
		companyGroupNameEng: 'internet resource',
		companyGroupNameRus: 'интернет ресурс',
		colorHex: '#5555FF',
	},
	{
		id: 8,
		companyGroupNameEng: 'special',
		companyGroupNameRus: 'специальный',
		colorHex: '#FFFFFF',
	},
]

export const companies: companyT[] = [
	{
		name: 'china mobile',
		image: companiesImages.chinaMobileImage,
		description: '',
		type: 'common',

		group: companyGroups[0],
		cost: 1700,
		owner: {
			uid: '123',
		},
	},
	{
		name: 'china telecom',
		image: companiesImages.chinaTelecomImage,
		description: '',
		type: 'common',

		group: companyGroups[0],
		cost: 1800,
	},
	{
		name: 'netflix',
		image: companiesImages.netflixImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'tencent',
		image: companiesImages.tencentImage,
		description: '',
		type: 'common',

		group: companyGroups[1],
		cost: 2100,
	},
	{
		name: 'realtek',
		image: companiesImages.realtekImage,
		description: '',
		type: 'common',

		group: companyGroups[1],
		cost: 2300,
	},
	{
		name: 'tsmcs',
		image: companiesImages.tsmcsImage,
		description: '',
		type: 'common',

		group: companyGroups[1],
		cost: 2400,
	},
	{
		name: 'wanhua',
		image: companiesImages.wanhuaImage,
		description: '',
		type: 'common',

		group: companyGroups[2],
		cost: 2100,
	},
	{
		name: 'sinopec',
		image: companiesImages.sinopecImage,
		description: '',
		type: 'common',

		group: companyGroups[2],
		cost: 2200,
	},
	{
		name: 'petro china',
		image: companiesImages.petroChinaImage,
		description: '',
		type: 'common',

		group: companyGroups[2],
		cost: 2100,
	},
	{
		name: 'adobe',
		image: companiesImages.adobeImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'lenovo',
		image: companiesImages.lenovoImage,
		description: '',
		type: 'common',

		group: companyGroups[3],
		cost: 1800,
	},
	{
		name: 'xiaomi',
		image: companiesImages.xiaomiImage,
		description: '',
		type: 'common',

		group: companyGroups[3],
		cost: 1900,
	},
	{
		name: 'huawei',
		image: companiesImages.huaweiImage,
		description: '',
		type: 'common',

		group: companyGroups[3],
		cost: 1800,
	},
	{
		name: 'icbc',
		image: companiesImages.icbcImage,
		description: '',
		type: 'common',

		group: companyGroups[4],
		cost: 2600,
	},
	{
		name: 'bank of china',
		image: companiesImages.bankOfChinaImage,
		description: '',
		type: 'common',

		group: companyGroups[4],
		cost: 2700,
	},
	{
		name: 'pingan',
		image: companiesImages.pinganImage,
		description: '',
		type: 'common',

		group: companyGroups[4],
		cost: 2300,
	},
	{
		name: 'pepsico',
		image: companiesImages.pepsicoImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'tiens',
		image: companiesImages.tiensImage,
		description: '',
		type: 'common',

		group: companyGroups[5],
		cost: 2300,
	},
	{
		name: 'sinopharm',
		image: companiesImages.sinopharmImage,
		description: '',
		type: 'common',

		group: companyGroups[5],
		cost: 2300,
	},
	{
		name: 'wiXi appTec',
		image: companiesImages.wuXiAppTecImage,
		description: '',
		type: 'common',

		group: companyGroups[5],
		cost: 2400,
	},
	{
		name: 'whGroup',
		image: companiesImages.whGroupImage,
		description: '',
		type: 'common',

		group: companyGroups[6],
		cost: 1900,
	},
	{
		name: 'haitian flavouring and food',
		image: companiesImages.haitianFlavouringAndFoodImage,
		description: '',
		type: 'common',

		group: companyGroups[6],
		cost: 1900,
	},
	{
		name: 'wuliangye Yibin',
		image: companiesImages.wuliangyeYibinImage,
		description: '',
		type: 'common',

		group: companyGroups[6],
		cost: 2000,
	},
	{
		name: 'coca cola',
		image: companiesImages.cocaColaImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'baidu',
		image: companiesImages.baiduImage,
		description: '',
		type: 'common',

		group: companyGroups[7],
		cost: 2100,
	},
	{
		name: 'alibaba',
		image: companiesImages.alibabaImage,
		description: '',
		type: 'common',

		group: companyGroups[7],
		cost: 2200,
	},
]

const createBranchCost = (company: commonCompanyI) => {
	return Math.ceil(company.cost / 1.8)
}

const createRentsCost = (company: commonCompanyI) => {
	const levels: number[] = []
	for (let i = 1; i <= 5; i++) {
		const baseRent = company.cost / 100
		levels.push(Math.ceil(company.cost / 3 + Math.exp(baseRent / 9.75) * i ** 4.25))
	}
	return levels
}

export const generateFullCompaniesData = () => {
	let tempCompanies = [...companies]
	tempCompanies = tempCompanies.map(company => {
		if (company.type === 'common') {
			company.branchCost = createBranchCost(company)
			company.rents = createRentsCost(company)
			return company
		} else if (company.type === 'uncommon') {
			company.baseRent = 500
			return company
		} else return company
	})
	console.log(tempCompanies)
	return tempCompanies
}
