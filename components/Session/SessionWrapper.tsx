import { FC, memo, ReactNode } from 'react'
import style from './SessionWrapper.module.scss'

const SessionWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className={style.wrapper}>{children}</div>
}

export default memo(SessionWrapper)
