'use client'

import { FC, memo, useEffect, useState } from 'react'
import SessionWrapper from '@/components/Session/SessionWrapper/SessionWrapper'
import UsersMenu from '@/components/Session/Users/UsersMenu'
import Field from '@/components/Session/Field/Field'
import { doc, onSnapshot } from '@firebase/firestore'
import { db } from '@/store/firestore'
import { usePathname } from 'next/navigation'
import { sessionI } from '@/store/interfaces/session'
import { useAppDispatch, useAppSelector } from '@/store/index'
import MiniPopup from '@/components/Popups/MiniPopup'
import MiniPopups from '@/components/Popups/MiniPopups'
import { AnimatePresence } from 'framer-motion'
import { pushMiniPopupTexts } from '@/store/reducers/popups'

const SessionPage: FC = () => {
	const miniPopupTexts = useAppSelector(state => state.popups.miniPopupTexts)
	const [sessionData, setSessionData] = useState<Partial<sessionI>>()
	const pathName = usePathname()
	const dispatch = useAppDispatch()

	const checker = (sessionId: string) => {
		onSnapshot(doc(db, 'sessions', sessionId), doc => {
			const data = doc.data() as Partial<sessionI> | undefined
			if (data) {
				setSessionData(data)
			} else {
				dispatch(
					pushMiniPopupTexts({
						type: 'red',
						body: 'Внимание! Такой сессии не существует!',
						time: 10000,
					})
				)
			}
		})
	}

	useEffect(() => {
		const paths = pathName.split('/')
		const sessionId = paths[paths.length - 1]
		if (!(typeof sessionId === 'string')) return
		checker(sessionId)
	}, [pathName])

	return (
		<SessionWrapper>
			{sessionData ? <UsersMenu sessionData={sessionData} /> : null}
			<Field />
			<MiniPopups>
				<AnimatePresence>
					{miniPopupTexts.map(text => {
						return <MiniPopup key={text.id} type={text.type} text={text} time={text.time} />
					})}
				</AnimatePresence>
			</MiniPopups>
		</SessionWrapper>
	)
}

export default memo(SessionPage)
