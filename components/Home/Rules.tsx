import { FC, memo } from 'react'
import style from './Rules.module.scss'

interface RulesProps {

}

const Rules: FC<RulesProps> = () => {
  return (
    <div className={style.rules}>

    </div>
  )
}

Rules.displayName = 'Rules'
export default memo(Rules)