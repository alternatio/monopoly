'use client'

import { FC, memo } from 'react'
import style from './Popup.module.scss'
import Button from '@/ui/Button/Button'
import Image from 'next/image'
import { githubIcon, googleIcon } from '@/lib/ImportIcons'
import PopupBlock from '@/components/Popups/PopupBlock'
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/store/index'
import { signInWithGooglePopup } from '@/store/firestore/controller'
import { userDataI } from '@/store/interfaces/user'
import { setUserData } from '@/store/reducers/user'

const SignUpPopup: FC = () => {
	const currentPopup = useAppSelector(state => state.popups.currentPopup)

	const dispatch = useAppDispatch()

	const setUser = (state: userDataI | undefined) => {
		dispatch(setUserData(state))
	}

	return (
		<AnimatePresence>
			{currentPopup === 0 && (
				<PopupBlock title={'Войти в аккаунт'}>
					<Button
						className={style.button}
						onClick={async () => {
							await signInWithGooglePopup(setUser)
						}}>
						<Image src={googleIcon} alt={'googleIcon'} />
						<span>Войти через Google</span>
					</Button>
					{/*<Button className={style.button}>*/}
					{/*	<Image src={githubIcon} alt={'githubIcon'} />*/}
					{/*	<span>Войти через Github</span>*/}
					{/*</Button>*/}
				</PopupBlock>
			)}
		</AnimatePresence>
	)
}

export default memo(SignUpPopup)
