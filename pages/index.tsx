import type { NextPage } from 'next'
import style from '/styles/pages/Home.module.scss'
import React, { FC, useState } from 'react'
import Head from 'next/head'
import Wrapper from '../src/3ui/Wrapper/Wrapper'
import Header from '../src/1modules/Header/Header'

const Home: NextPage = () => {
	const [createPopupVisible, handleCreatePopupVisible] =
		useState<boolean>(false)
	const [joinPopupVisible, handleJoinPopupVisible] =
		useState<boolean>(false)

	const maxWidth = '70rem'

	return (
		<>
			<Head>
				<title>HOME</title>
			</Head>
			<Wrapper maxWidth={maxWidth}>
				<Header maxWidth={maxWidth}/>
				<div className={style.big}></div>
			</Wrapper>
		</>
	)
}

export default React.memo(Home)
