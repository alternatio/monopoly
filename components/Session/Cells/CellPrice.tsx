import { CSSProperties, FC, memo } from 'react'
import style from './Cell.module.scss'
import { cellI } from '@/store/interfaces/cell'

interface CellPriceI {
	data: cellI['data']
}

const CellPrice: FC<CellPriceI> = ({ data }) => {
	return (
		<>
			<CommonPrice data={data} />
			<UncommonPrice data={data} />
		</>
	)
}

const getPosition = (data: CellPriceI['data']): CSSProperties => {
	if (data.type !== 'chat') {
		return {
			right: data.direction === 'left' ? 'calc(100% + .2rem)' : undefined,
			bottom: data.direction === 'top' ? 'calc(100% + .2rem)' : undefined,
			left: data.direction === 'right' ? 'calc(100% + .2rem)' : undefined,
			top: data.direction === 'bottom' ? 'calc(100% + .2rem)' : undefined,

			width:
				data.direction === 'top' || data.direction === 'bottom'
					? '100%'
					: '1rem',
			height:
				data.direction === 'right' || data.direction === 'left'
					? '100%'
					: '1rem',
		}
	} else return {}
}

const getRotation = (data: CellPriceI['data']): CSSProperties => {
	if (data.type !== 'chat') {
		return {
			transform:
				data.direction === 'right' || data.direction === 'left'
					? 'rotate(90deg)'
					: undefined,
		}
	} else return {}
}

const Price: FC<CellPriceI> = ({ data }) => {
	if (data.type !== 'common' && data.type !== 'uncommon') return null
	return (
		<div
			style={{
				...getPosition(data),
				background: data.group ? data.group?.colorHex : undefined,
			}}
			className={style.price}>
			<div style={getRotation(data)} className={style.priceBody}>
				{/*{data.owner*/}
				{/*	? (getTotalRent(data) / 1000).toFixed(1)*/}
				{/*	: (data.cost / 1000).toFixed(1)}*/}
				<span>{data.cost}</span>
				<span>M¥</span>
			</div>
		</div>
	)
}

const CommonPrice: FC<CellPriceI> = ({ data }) => {
	if (data.type !== 'common') return null
	return <Price data={data} />
}

const UncommonPrice: FC<CellPriceI> = ({ data }) => {
	if (data.type !== 'uncommon') return null
	return <Price data={data} />
}

export default memo(CellPrice)
