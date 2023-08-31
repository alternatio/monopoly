import { FC, memo } from 'react'
import style from './Filter.module.scss'

interface FilterProps {}

const Filter: FC<FilterProps> = props => {
	return <div className={style.filter} />
}

export default memo(Filter)
