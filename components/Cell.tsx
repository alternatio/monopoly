import {CellLineInterface} from "../data/cellData";
import React, {FC} from "react";
import style from "/styles/components/Field.module.scss";
import Image from "next/image";
import questionImage from "/images/question.svg";

interface CellInterface {
	index: number
	object: CellLineInterface
	numberLine: number
}

const Cell: FC<CellInterface> = (props) => {
	let image

	if (props.object.companyID !== undefined) {
		image = require(`/images/companies/${props.object.companyID}.svg`)
		// console.log(image)
	}

	return (
		<div className={style.cell}>
			{/*<div className={style.cellTop}>*/}

			{/*</div>*/}
			<main className={style.cellMain}>
				{props.numberLine === 2 || props.numberLine === 4 ?
					<div className={style.cellMainContentHorizontal}>
						{props.object.companyID !== undefined && image ?
							<Image
								objectFit={'contain'}
								src={image}
								alt={props.object.companyName} /> :
							<Image
								objectFit={'contain'}
								src={questionImage}
								alt={'question'}/>
						}
					</div> :
					<div className={style.cellMainContentVertical}>
						{props.object.companyID !== undefined && image ?
							<Image
								objectFit={'contain'}
								src={image}
								alt={props.object.companyName} /> :
							<Image
								objectFit={'contain'}
								src={questionImage}
								alt={'question'}/>
						}
					</div>
					}
			</main>
		</div>
	)
}

export default React.memo(Cell)