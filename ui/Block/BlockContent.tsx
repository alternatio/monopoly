import { FC, memo } from 'react'
import style from './Block.module.scss'

interface BlockContentI {

}

const BlockContent: FC<BlockContentI> = props => {
	return (
		<div className={style.content}>

		</div>
	)
}

export default memo(BlockContent)