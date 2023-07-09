'use client'

import { FC, memo, ReactNode, useRef } from 'react'
import style from './Popups.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/index'
import Image from 'next/image'
import { starIcon } from '@/lib/ImportIcons'
import { useOnClickOutside } from '@/lib/hooks/useOnClickOutside'
import { setCompanyPopup } from '@/store/reducers/session'
import { AnimatePresence, motion } from 'framer-motion'
import { commonAnimations, getEaseTransition } from '@/lib/animations'
import { sessionPopupV } from '@/components/Session/Popups/variants'

interface CompanyInfoLineProps {
	children: ReactNode
	value: string
}

const CompanyInfoLine: FC<CompanyInfoLineProps> = ({ children, value }) => {
	return (
		<div className={style.companyInfoLine}>
			<div className={style.companyInfoLinePart}>{children}</div>
			<span className={style.companyInfoLinePart}>{value}</span>
		</div>
	)
}

const CompanyPopup: FC = () => {
	const company = useAppSelector(state => state.session.companyPopup)
	const dispatch = useAppDispatch()

	const ref = useRef<HTMLDivElement | null>(null)
	useOnClickOutside(ref, () => dispatch(setCompanyPopup(null)))

	return (
		<AnimatePresence initial={false}>
			{company ? (
				<motion.div
					className={style.popup}
					ref={ref}
					{...commonAnimations}
					variants={sessionPopupV}
					transition={getEaseTransition(.75, 'anticipate', .15)}>
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
						<span className={style.companyDescription}>
							{company.description}
						</span>
					</div>
					<div className={style.companyInfo}>
						<CompanyInfoLine value={`${company.cost}¥`}>
							Стоимость поля
						</CompanyInfoLine>
						{company.type === 'common' ? (
							<CompanyInfoLine value={`${company.branchCost}¥`}>
								Стоимость филиала
							</CompanyInfoLine>
						) : null}
						{company.type === 'common' && company?.rents?.length
							? company.rents.map((rent, index) => {
									if (index) {
										return (
											<CompanyInfoLine value={`${rent}¥`}>
												{Array.from({ length: index }).map(() => {
													return <Image src={starIcon} alt={'star'} />
												})}
											</CompanyInfoLine>
										)
									} else {
										return (
											<CompanyInfoLine value={`${rent}¥`}>
												Базовая аренда
											</CompanyInfoLine>
										)
									}
							  })
							: null}
						{/*{company.type === 'uncommon' ? company.}*/}
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

export default memo(CompanyPopup)
