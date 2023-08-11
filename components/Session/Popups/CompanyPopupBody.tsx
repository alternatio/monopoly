import { companyT } from '@/store/interfaces/cell'
import { FC, memo } from 'react'
import style from '@/components/Session/Popups/Popups.module.scss'
import Image from 'next/image'
import InfoLine from '@/components/Session/Popups/InfoLine'
import { starIcon } from '@/lib/ImportIcons'

interface CompanyPopupBodyProps {
	company: companyT
}

const CompanyPopupBody: FC<CompanyPopupBodyProps> = ({ company }) => {
	return (
		<>
			<div className={style.companyTop}>
				<Image
					className={style.companyImage}
					src={company?.image}
					alt={'company image'}
				/>
				{/*<span className={style.companyName}>{company.name}</span>*/}
				<span
					className={style.companyGroup}
					style={{ color: company.group?.colorHex }}>
					{company.group?.companyGroupNameRus}
				</span>
				<span className={style.companyDescription}>{company.description}</span>
			</div>
			<div className={style.companyInfo}>
				<InfoLine value={`${company.cost}¥`}>Стоимость поля</InfoLine>
				{company.type === 'common' ? (
					<InfoLine value={`${company.branchCost}¥`}>
						Стоимость филиала
					</InfoLine>
				) : null}
				{company.type === 'common' && company?.rents?.length
					? company.rents.map((rent, index) => {
							if (index) {
								return (
									<InfoLine value={`${rent}¥`}>
										{Array.from({ length: index }).map(() => {
											return <Image src={starIcon} alt={'star'} />
										})}
									</InfoLine>
								)
							} else {
								return <InfoLine value={`${rent}¥`}>Базовая аренда</InfoLine>
							}
					  })
					: null}
				{/*{company.type === 'uncommon' ? company.}*/}
			</div>
		</>
	)
}

export default memo(CompanyPopupBody)
