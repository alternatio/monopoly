import { FC, memo } from 'react'
import CellBlock from '@/components/Session/Cell/CellBlock'
import {cellI} from "@/store/interfaces/cell";

const CornerCell: FC<cellI> = props => {
	if (props.data?.type === 'corner') {
		return <CellBlock cell={props}>{props.data.text}</CellBlock>
	} else return null
}

export default memo(CornerCell)
