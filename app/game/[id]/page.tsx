'use client'

import { FC, memo, useEffect, useState } from 'react'
import SessionWrapper from '@/components/Session/SessionWrapper/SessionWrapper'
import UsersMenu from '@/components/Session/Users/UsersMenu'
import Field from '@/components/Session/Field/Field'
import { doc, onSnapshot } from '@firebase/firestore'
import { db } from '@/store/firestore'
import { usePathname } from 'next/navigation'
import { sessionI } from '@/store/interfaces/session'
import { useAppSelector } from '@/store/index'
import MiniPopup from '@/components/Popups/MiniPopup'
import MiniPopups from '@/components/Popups/MiniPopups'
import { AnimatePresence } from 'framer-motion'

const SessionPage: FC = () => {
	const miniPopupTexts = useAppSelector(state => state.popups.miniPopupTexts)
	const [sessionData, setSessionData] = useState<Partial<sessionI>>()
	const pathName = usePathname()

	const checker = (sessionId: string) => {
		onSnapshot(doc(db, 'sessions', sessionId), doc => {
			const data = doc.data() as Partial<sessionI> | undefined
			if (data) {
				setSessionData(data)
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
						return <MiniPopup key={text.id} type={'green'} text={text} />
					})}
				</AnimatePresence>
			</MiniPopups>
		</SessionWrapper>
	)
}

export default memo(SessionPage)
