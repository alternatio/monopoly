import {motion} from "framer-motion";
import React, {FC, useEffect, useRef, useState} from "react";
import style from "/styles/components/Field.module.scss";
import {positionPlayerInterface, positionsPlayer} from "../data/positionsPlayerData";
import {cellLine1, cellLine2, cellLine3, cellLine4} from "../data/cellData";
import Cell from "./Cell";
import {collection, doc, onSnapshot, setDoc} from "@firebase/firestore";
import {firebaseData} from "../data/firebase";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

interface FiledInterface {
	getToken: Function
}

const Field: FC<FiledInterface> = (props) => {
	let currentSession: DocumentData = useRef({})
	const [data, setData] = useState<DocumentData>({})
	const [playerPosition, setPlayerPosition] = useState<positionPlayerInterface>(positionsPlayer[0])

	const currentSessionRef = doc(collection(firebaseData, 'sessions'), props.getToken())


	onSnapshot(currentSessionRef, (session) => {
		// @ts-ignore
		currentSession = session.data()
		// console.log(currentSession)
	})

	const transitionMotion = {
		duration: .3,
		type: 'tween'
	}

	const motionPlayer = (numberOfPlayer: number) => {
		const copyData: DocumentData = currentSession
		console.log(currentSession.players[numberOfPlayer])
		const player = currentSession.players[numberOfPlayer]

		player.position < player.targetPosition &&
			(player.position += 1)

		setPlayerPosition(positionsPlayer[copyData.players[0].position])

		copyData.players[numberOfPlayer] = player

		setDoc(currentSessionRef, copyData)
	}

	const setTargetPosition = (numberOfPlayer: number, targetPosition: number) => {
		const copyData: DocumentData = currentSession

		currentSession.players[numberOfPlayer].position += 1
		currentSession.players[numberOfPlayer].targetPosition = targetPosition

		setPlayerPosition(positionsPlayer[copyData.players[0].position])

		setDoc(currentSessionRef, copyData)
	}



	return (
		<div className={style.field}>
			<div
				onClick={() => {
					const currentPlayer = 0
					const lastTargetPosition = currentSession.players[currentPlayer].position + 5
					setTargetPosition(currentPlayer, lastTargetPosition)
				}}
				className={style.startCell}>

			</div>
			<div className={style.prisonCell}>
				Тюрьма
			</div>
			<div className={style.coinCell}>
				Монета
			</div>
			<div className={style.policeCell}>
				Коп
			</div>


			<div className={style.fieldLine1}>
				{cellLine1.map((object, index) => {
					return	(
						<Cell key={index} numberLine={1} index={index} object={object}/>
					)
				})}
			</div>

			<div className={style.fieldLine2}>
				{cellLine2.map((object, index) => {
					return	(
						<Cell key={index} numberLine={2} index={index} object={object}/>
					)
				})}
			</div>

			<div className={style.fieldLine3}>
				{cellLine3.map((object, index) => {
					return	(
						<Cell key={index} numberLine={3} index={index} object={object}/>
					)
				})}
			</div>

			<div className={style.fieldLine4}>
				{cellLine4.map((object, index) => {
					return	(
						<Cell key={index} numberLine={4} index={index} object={object}/>
					)
				})}
			</div>

			<motion.div
				animate={playerPosition}
				onAnimationComplete={() => {
					motionPlayer(0)
				}}

				className={style.player}>

			</motion.div>
		</div>
	)
}

export default React.memo(Field)