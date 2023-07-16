'use client'

import { FC, memo, useEffect } from 'react'
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
import { setSessionDataStore } from '@/store/reducers/session'
import { setUserGameData } from '@/store/reducers/user'
import Head from 'next/head'

const SessionPage: FC = () => {
	const miniPopupTexts = useAppSelector(state => state.popups.miniPopupTexts)
	const sessionData = useAppSelector(state => state.session.sessionDataStore)
	const userData = useAppSelector(state => state.user.data)
	const pathName = usePathname()
	const dispatch = useAppDispatch()

	const checker = (sessionId: string) => {
		onSnapshot(doc(db, 'sessions', sessionId), doc => {
			const data = doc.data() as Partial<sessionI> | undefined
			if (data) {
				dispatch(setSessionDataStore(data))
				const player = data.players?.find(
					player => player.data.email === userData?.email
				)
				console.log(player, userData)
				if (player?.gameData) {
					dispatch(setUserGameData(player.gameData))
				}
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
	}, [pathName, userData])

	return (
		<>
			<Head>
				<meta name={'viewport'} content={undefined} />
			</Head>
			<SessionWrapper>
				{sessionData ? <UsersMenu sessionData={sessionData} /> : null}
				<Field />
				<MiniPopups>
					<AnimatePresence>
						{miniPopupTexts.map(text => {
							return <MiniPopup key={text.id} type={text.type} text={text} />
						})}
					</AnimatePresence>
				</MiniPopups>
			</SessionWrapper>
		</>
	)
}

export default memo(SessionPage)
