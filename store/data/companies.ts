import { commonCompanyI, companyGroupI, companyT } from '@/store/interfaces/cell'
import { companiesImages } from '@/lib/importImage'

type withoutIdCompanyGroupI = Omit<companyGroupI, 'id'>

export const companyGroupsWithoutId: withoutIdCompanyGroupI[] = [
	{
		companyGroupNameEng: 'communication',
		companyGroupNameRus: 'связь',
		colorHex: '#FFBB00',
	},
	{
		companyGroupNameEng: 'microelectronics',
		companyGroupNameRus: 'микроэлектроника',
		colorHex: '#44BB66',
	},
	{
		companyGroupNameEng: 'oil industry',
		companyGroupNameRus: 'нефтяная промышленность',
		colorHex: '#F80833',
	},
	{
		companyGroupNameEng: 'electronics',
		companyGroupNameRus: 'электроника',
		colorHex: '#08F8F8',
	},
	{
		companyGroupNameEng: 'financial industry',
		companyGroupNameRus: 'финансовая индустрия',
		colorHex: '#8FFF00',
	},
	{
		companyGroupNameEng: 'pharmaceuticals',
		companyGroupNameRus: 'фармацевтика',
		colorHex: '#DB00FF',
	},
	{
		companyGroupNameEng: 'pharmaceuticals',
		companyGroupNameRus: 'пищевая промышленность',
		colorHex: '#FFFF00',
	},
	{
		companyGroupNameEng: 'internet resource',
		companyGroupNameRus: 'интернет ресурс',
		colorHex: '#5555FF',
	},
	{
		companyGroupNameEng: 'special',
		companyGroupNameRus: 'специальный',
		colorHex: '#FFFFFF',
	},
]
export const companyGroups: companyGroupI[] = companyGroupsWithoutId.map((companyGroup, index) => {
	return {
		id: index,
		...companyGroup,
	}
})

type withoutIdCompanyT = Omit<companyT, 'id'>

const companiesWithoutId: withoutIdCompanyT[] = [
	{
		name: 'China mobile',
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
		name: 'China telecom',
		image: companiesImages.chinaTelecomImage,
		description: '',
		type: 'common',

		group: companyGroups[0],
		cost: 1800,
	},
	{
		name: 'Netflix',
		image: companiesImages.netflixImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'Tencent',
		image: companiesImages.tencentImage,
		description: '',
		type: 'common',

		group: companyGroups[1],
		cost: 2100,
	},
	{
		name: 'Realtek',
		image: companiesImages.realtekImage,
		description: '',
		type: 'common',

		group: companyGroups[1],
		cost: 2300,
	},
	{
		name: 'TSMC',
		image: companiesImages.tsmcsImage,
		description: '',
		type: 'common',

		group: companyGroups[1],
		cost: 2400,
	},
	{
		name: 'Wanhua',
		image: companiesImages.wanhuaImage,
		description: '',
		type: 'common',

		group: companyGroups[2],
		cost: 2100,
	},
	{
		name: 'Sinopec',
		image: companiesImages.sinopecImage,
		description: '',
		type: 'common',

		group: companyGroups[2],
		cost: 2200,
	},
	{
		name: 'Petro China',
		image: companiesImages.petroChinaImage,
		description: '',
		type: 'common',

		group: companyGroups[2],
		cost: 2100,
	},
	{
		name: 'Adobe',
		image: companiesImages.adobeImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'Lenovo',
		image: companiesImages.lenovoImage,
		description: '',
		type: 'common',

		group: companyGroups[3],
		cost: 1800,
	},
	{
		name: 'Xiaomi',
		image: companiesImages.xiaomiImage,
		description: '',
		type: 'common',

		group: companyGroups[3],
		cost: 1900,
	},
	{
		name: 'Huawei',
		image: companiesImages.huaweiImage,
		description: '',
		type: 'common',

		group: companyGroups[3],
		cost: 1800,
	},
	{
		name: 'ICBC',
		image: companiesImages.icbcImage,
		description: '',
		type: 'common',

		group: companyGroups[4],
		cost: 2600,
	},
	{
		name: 'Bank of China',
		image: companiesImages.bankOfChinaImage,
		description: '',
		type: 'common',

		group: companyGroups[4],
		cost: 2700,
	},
	{
		name: 'Pingan',
		image: companiesImages.pinganImage,
		description: '',
		type: 'common',

		group: companyGroups[4],
		cost: 2300,
	},
	{
		name: 'Pepsico',
		image: companiesImages.pepsicoImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'Tiens',
		image: companiesImages.tiensImage,
		description: '',
		type: 'common',

		group: companyGroups[5],
		cost: 2300,
	},
	{
		name: 'Sinopharm',
		image: companiesImages.sinopharmImage,
		description: '',
		type: 'common',

		group: companyGroups[5],
		cost: 2300,
	},
	{
		name: 'WiXi AppTec',
		image: companiesImages.wuXiAppTecImage,
		description: '',
		type: 'common',

		group: companyGroups[5],
		cost: 2400,
	},
	{
		name: 'WhGroup',
		image: companiesImages.whGroupImage,
		description: '',
		type: 'common',

		group: companyGroups[6],
		cost: 1900,
	},
	{
		name: 'Haitian Flavouring and Food',
		image: companiesImages.haitianFlavouringAndFoodImage,
		description: '',
		type: 'common',

		group: companyGroups[6],
		cost: 1900,
	},
	{
		name: 'Wuliangye Yibin',
		image: companiesImages.wuliangyeYibinImage,
		description: '',
		type: 'common',

		group: companyGroups[6],
		cost: 2000,
	},
	{
		name: 'CocaCola',
		image: companiesImages.cocaColaImage,
		description: '',
		type: 'uncommon',

		group: companyGroups[8],
		cost: 1900,
	},
	{
		name: 'Baidu',
		image: companiesImages.baiduImage,
		description: '',
		type: 'common',

		group: companyGroups[7],
		cost: 2100,
	},
	{
		name: 'Alibaba',
		image: companiesImages.alibabaImage,
		description: '',
		type: 'common',

		group: companyGroups[7],
		cost: 2200,
	},
]

export const companies: companyT[] = companiesWithoutId.map((company, index) => {
	return {
		id: index,
		...company,
	}
})

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
