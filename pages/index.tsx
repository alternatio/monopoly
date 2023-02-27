import type { NextPage } from 'next'
import style from '/styles/pages/Home.module.scss'
import React, { FC, useState } from 'react'
import Head from 'next/head'
import Wrapper from '../src/3ui/Wrapper/Wrapper'

const Home: NextPage = () => {
	const [createPopupVisible, handleCreatePopupVisible] =
		useState<boolean>(false)
	const [joinPopupVisible, handleJoinPopupVisible] =
		useState<boolean>(false)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Wrapper>

			</Wrapper>
		</>
	)
}

export default React.memo(Home)
