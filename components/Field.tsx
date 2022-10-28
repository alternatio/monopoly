import {motion} from "framer-motion";
import React, {FC, useEffect, useMemo, useState} from "react";
import style from "/styles/components/Field.module.scss";
import {positionPlayerInterface, positionsPlayer} from "../data/positionsPlayerData";
import {cellLine1, cellLine2, cellLine3, cellLine4} from "../data/cellData";
import Cell from "./Cell";
import {collection, doc, onSnapshot, setDoc} from "@firebase/firestore";
import {db} from "../data/firebase";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

interface FiledInterface {
	getToken: Function
}

const Field: FC<FiledInterface> = (props) => {

	const [playerPosition, setPlayerPosition] = useState<positionPlayerInterface>(positionsPlayer[0])
	const [data, setData] = useState<DocumentData | undefined>({})

	const currentSessionRef = doc(collection(db, 'sessions'), props.getToken())

	console.log(data)

	useEffect(() => {
		const unsub = onSnapshot(currentSessionRef, (session) => {
			setData(session.data())
		})

		return () => unsub()
	}, [])

	const transitionMotion = {
		duration: .3,
		type: 'tween'
	}



	return (
		<div className={style.field}>
			<div
				onClick={() => {
					if (data) {
						const copyData = data
						copyData.players[0].position += 1
						console.log(copyData)
						setDoc(currentSessionRef, copyData)
					}
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
				animate={data && positionsPlayer[data.players[0].position]}
				onAnimationComplete={() => {

				}}

				className={style.player}>

			</motion.div>
		</div>
	)
}

export default React.memo(Field)