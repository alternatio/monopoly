'use client'

import { FC, memo, useEffect, useRef, useState } from 'react'
import style from './Popups.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { useOnClickOutside } from '@/lib/hooks/useOnClickOutside'
import { setCompanyPopup } from '@/store/reducers/session'
import { AnimatePresence, motion } from 'framer-motion'
import { commonAnimations, getSpringTransition } from '@/lib/animations'
import { sessionPopupV } from '@/components/Session/Popups/variants'
import Loader from '@/ui/Loader/Loader'
import CompanyPopupBody from './CompanyPopupBody'

const CompanyPopup: FC = () => {
	const company = useAppSelector(state => state.session.companyPopup)
	const [loading, handleLoading] = useState<boolean>(true)

	const dispatch = useAppDispatch()

	const ref = useRef<HTMLDivElement | null>(null)
	useOnClickOutside(ref, () => dispatch(setCompanyPopup(null)))

	useEffect(() => {
		handleLoading(true)
		setTimeout(() => {
			handleLoading(false)
		}, 100)
	}, [company])

	return (
		<AnimatePresence initial={false}>
			{company ? (
				<motion.div
					className={style.popup}
					ref={ref}
					{...commonAnimations}
					variants={sessionPopupV}
					// style={{ minHeight: '10rem' }}
					transition={getSpringTransition(40, 300, 0.15)}>
					{loading ? <Loader /> : <CompanyPopupBody company={company} />}
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

export default memo(CompanyPopup)
