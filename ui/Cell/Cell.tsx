import { FC, memo } from 'react'
import style from './styles/Cell.module.scss'

interface CellProps {

}

const Cell: FC<CellProps> = props => {
  return (
    <div></div>
  )
}

Cell.displayName = 'Cell'
export default memo(Cell)