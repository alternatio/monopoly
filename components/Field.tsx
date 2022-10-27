import {motion} from "framer-motion";
import React, {FC, useEffect, useState} from "react";
import style from "/styles/components/Field.module.scss";
import {positionsPlayer} from "../data/positionsPlayerData";
import {cellLine1, cellLine2, cellLine3, cellLine4} from "../data/cellData";
import Cell from "./Cell";
import {playerDataInterface} from "../data/playerData";
import {initialSession} from "../data/sessionData";
import {collection, doc, onSnapshot, setDoc} from "@firebase/firestore";
import {firebaseData} from "../data/firebase";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

interface FiledInterface {
	getToken: Function
}

const Field: FC<FiledInterface> = (props) => {
	const [players, setPlayers] = useState<playerDataInterface[]>(initialSession.players)
	const [data, setData] = useState<DocumentData>(initialSession)

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
		if (players[numberOfPlayer].targetPosition !== players[numberOfPlayer].position) {
			if (players[numberOfPlayer].position < 31) {
				const playerPosition = players[0].position + 1
				const playerInArray = [...players]
				playerInArray[0].position = playerPosition
				setPlayers(playerInArray)

				data.players = players
			} else {
				const playerPosition = 0
				const playerInArray = [...players]
				playerInArray[0].position = playerPosition
				setPlayers(playerInArray)

				data.players = players
			}
			console.log(data.players[0].position)
			console.log(players[numberOfPlayer].targetPosition, players[numberOfPlayer].position)
		}
	}



	return (
		<div className={style.field}>
			<div
				onClick={() => {
					const playerPosition = (players[0].position + 1) % 32
					const playerInArray = [...players]
					playerInArray[0].position = playerPosition
					playerInArray[0].targetPosition = ((playerInArray[0].position + 6) % 32)
					setPlayers(playerInArray)
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
				animate={positionsPlayer[players[0].position]}
				onAnimationComplete={() => motionPlayer(0)}
				// animate
				// onAnimationComplete={() => {
				//
				// }}
				// transition={transitionMotion}
				className={style.player}>

			</motion.div>
		</div>
	)
}

export default React.memo(Field)