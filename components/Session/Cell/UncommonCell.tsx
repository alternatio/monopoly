import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cell/CellBlock'
import Image from 'next/image'
import style from '@/components/Session/Cell/Cell.module.scss'
import CellPrice from '@/components/Session/Cell/CellPrice'
import {cellI} from "@/store/interfaces/cell";

const UncommonCell: FC<cellI> = props => {
	if (props.data?.type === 'uncommon') {
		return (
			<CellBlock cell={props}>
				<CellPrice data={props.data} />
				<Image
					className={style.cellImage}
					data-rotated={
						props.data.direction === 'top' ||
						props.data.direction === 'bottom'
					}
					src={props.data.image}
					alt={'company'}
				/>
			</CellBlock>
		)
	} else return null
}

export default memo(UncommonCell)
