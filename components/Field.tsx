import {motion} from "framer-motion";
import React, {FC, useState} from "react";
import style from "/styles/components/Field.module.scss";
import {positionsPlayer} from "../data/positionsPlayerData";
import {cellLine1, cellLine2, cellLine3, cellLine4, CellLineInterface} from "../data/cellData";
import Image from "next/image";
import Cell from "./Cell";

const Field: FC = () => {
	const [positionPlayer1, setPositionPlayer1] = useState<number>(0)
	const [targetPositionPlayer1, setTargetPositionPlayer1] = useState<number>(0)
	const [positionPlayer2, setPositionPlayer2] = useState<number>(0)
	const [positionPlayer3, setPositionPlayer3] = useState<number>(0)
	const [positionPlayer4, setPositionPlayer4] = useState<number>(0)

	const transitionMotion = {
		duration: .3,
		type: 'tween'
	}

	const motionPlayer = () => {
		if (targetPositionPlayer1 !== positionPlayer1) {
			if (positionPlayer1 < 31) {
				setPositionPlayer1(positionPlayer1 + 1)
			} else {
				setPositionPlayer1(0)
			}
		}
	}



	return (
		<div className={style.field}>
			<div
				onClick={() => {
					setPositionPlayer1((positionPlayer1 + 1) % 32)
					setTargetPositionPlayer1((positionPlayer1 + 2) % 32)
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
				animate={positionsPlayer[positionPlayer1]}
				onAnimationComplete={() => motionPlayer()}
				transition={transitionMotion}
				className={style.player}>

			</motion.div>
			<motion.div
				animate={positionsPlayer[positionPlayer2]}
				transition={transitionMotion}
				className={style.player}>

			</motion.div>
		</div>
	)
}

export default React.memo(Field)