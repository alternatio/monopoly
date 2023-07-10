'use client'

import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react'
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
					transition={getSpringTransition(40, 300, 0.15, 0, undefined, -1)}>
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
		</>
	)
}

export default memo(CompanyPopup)
