import {motion} from "framer-motion";
import React, {FC, useEffect, useState} from "react";
import style from "/styles/components/Field.module.scss";
import {positionPlayerInterface, positionsPlayer} from "../data/positionsPlayerData";
import {cellLine1, cellLine2, cellLine3, cellLine4} from "../data/cellData";
import Cell from "./Cell";
import {playerDataInterface} from "../data/playerData";
import {initialSession, sessionDataInterface} from "../data/sessionData";
import {collection, doc, onSnapshot, setDoc} from "@firebase/firestore";
import {firebaseData} from "../data/firebase";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

interface FiledInterface {
	getToken: Function
}

const Field: FC<FiledInterface> = (props) => {
	const [data, setData] = useState<DocumentData>(initialSession)
	const [playerPosition, setPlayerPosition] = useState<positionPlayerInterface>(positionsPlayer[data.players[0].position])

	useEffect(() => {
		onSnapshot(doc(collection(firebaseData, 'sessions'), props.getToken()), (sessions) => {
			console.log(sessions.data())

			// @ts-ignore
			setData(sessions.data())
		})
	}, [])

	const transitionMotion = {
		duration: .3,
		type: 'tween'
	}

	const motionPlayer = (numberOfPlayer: number) => {
		const copyData: DocumentData = data
		const player = copyData.players[numberOfPlayer]

		player.position < player.targetPosition &&
			(player.position += 1)

		setPlayerPosition(positionsPlayer[copyData.players[0].position])


		copyData.players[numberOfPlayer] = player

		console.log(copyData.players[numberOfPlayer])
		setData(copyData)
	}

	const setTargetPosition = (numberOfPlayer: number, targetPosition: number) => {
		const copyData: DocumentData = data

		copyData.players[numberOfPlayer].position += 1
		copyData.players[numberOfPlayer].targetPosition = targetPosition

		setPlayerPosition(positionsPlayer[copyData.players[0].position])
		console.log(positionsPlayer[data.players[0].position])

		console.log(copyData.players[numberOfPlayer])
		setData(copyData)
		console.log(data.players[numberOfPlayer])
	}



	return (
		<div className={style.field}>
			<div
				onClick={() => {
					const currentPlayer = 0
					const lastTargetPosition = data.players[currentPlayer].position + 5
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