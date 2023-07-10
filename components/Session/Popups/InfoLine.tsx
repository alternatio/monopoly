import { FC, memo, ReactNode } from 'react'
import style from '@/components/Session/Popups/Popups.module.scss'

interface InfoLineProps {
	children: ReactNode
	value: string
}

const InfoLine: FC<InfoLineProps> = ({ children, value }) => {
	return (
		<div className={style.companyInfoLine}>
			<div className={style.companyInfoLinePart}>{children}</div>
			<span className={style.companyInfoLinePart}>{value}</span>
		</div>
	)
}

export default memo(InfoLine)
