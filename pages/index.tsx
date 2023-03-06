import type { NextPage } from 'next'
import style from '/styles/pages/Home.module.scss'
import React, { useState } from 'react'
import Head from 'next/head'
import Wrapper from '../src/3ui/Wrapper/Wrapper'
import Header from '../src/1modules/Header/Header'
import Intro from '../src/1modules/Intro/Intro'
import MainCenterBlock from '../src/1modules/MainCenterBlock/MainCenterBlock'
import Questions from '../src/1modules/Questions/Questions'

const Home: NextPage = () => {
	const [createPopupVisible, handleCreatePopupVisible] =
		useState<boolean>(false)
	const [joinPopupVisible, handleJoinPopupVisible] =
		useState<boolean>(false)
	const [scrollPosition, setScrollPosition] =
		useState<number>(0)

	const maxWidth = '70rem'

	return (
		<>
			<Head>
				<title>HOME</title>
			</Head>

			<Wrapper
				maxWidth={maxWidth}
				setScrollPosition={setScrollPosition}>
				<Header
					maxWidth={maxWidth}
					scrollPosition={scrollPosition}
				/>
				<div className={style.content}>
					<Intro />
					<MainCenterBlock />
					<Questions />
				</div>
			</Wrapper>
		</>
	)
}

export default React.memo(Home)
