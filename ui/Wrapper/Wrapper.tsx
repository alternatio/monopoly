'use client'

import {FC, memo, ReactNode, useEffect} from 'react'
import styles from './Wrapper.module.scss'
import {useAppDispatch} from "@/store/index";
import {setUserData} from "@/store/reducers/user";
import {userDataI} from "@/store/interfaces/user";

interface WrapperProps {
	maxWidth: string
	marginTop?: string
	gap?: string
	children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const userData = localStorage.getItem('userData')
		if (userData) {
			const preparedUserData: userDataI = JSON.parse(userData)
			dispatch(setUserData(preparedUserData))
		}
	}, [])

	return (
		<div className={styles.wrapper}>
			<div
				style={{
					width: `min(100%, ${props.maxWidth})`,
					marginTop: props.marginTop ? props.marginTop : undefined,
					gap: props.gap ? props.gap : undefined,
				}}
				className={styles.innerWrapper}>
				{props.children}
			</div>
		</div>
	)
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
