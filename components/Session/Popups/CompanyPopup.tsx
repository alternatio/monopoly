'use client'

import { FC, memo, useEffect, useRef, useState } from 'react'
import style from './Popups.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/index'
import Image from 'next/image'
import { starIcon } from '@/lib/ImportIcons'
import { useOnClickOutside } from '@/lib/hooks/useOnClickOutside'
import { setCompanyPopup } from '@/store/reducers/session'
import { AnimatePresence, motion } from 'framer-motion'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { sessionPopupV } from '@/components/Session/Popups/variants'
import { companyT } from '@/store/interfaces/cell'
import Loader from '@/ui/Loader/Loader'
import InfoLine from './InfoLine'

const CompanyPopup: FC = () => {
	const [loading, handleLoading] = useState<boolean>(true)

	const company = useAppSelector(state => state.session.companyPopup)
	const dispatch = useAppDispatch()

	const ref = useRef<HTMLDivElement | null>(null)
	useOnClickOutside(ref, () => dispatch(setCompanyPopup(null)))

	useEffect(() => {
		handleLoading(true)
		setTimeout(() => {
			handleLoading(false)
		}, 200)
	}, [company])

	return (
		<AnimatePresence initial={false}>
			{company ? (
				<motion.div
					className={style.popup}
					ref={ref}
					{...commonAnimations}
					variants={sessionPopupV}
					style={{minHeight: '10rem'}}
					transition={getSpringTransition(40, 300, 0.15)}>
					{loading ? <Loader /> : <CompanyPopupBody company={company} />}
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

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
				<InfoLine value={`${company.cost}¥`}>
					Стоимость поля
				</InfoLine>
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
								return (
									<InfoLine value={`${rent}¥`}>
										Базовая аренда
									</InfoLine>
								)
							}
					  })
					: null}
				{/*{company.type === 'uncommon' ? company.}*/}
			</div>
		</>
	)
}

export default memo(CompanyPopup)
