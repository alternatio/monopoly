import { FC, memo, ReactNode } from 'react'
import style from '@/components/Session/Popups/Popups.module.scss'

interface InfoLineProps {
	children: ReactNode
	value: string
	infoClassname?: string
	partClassname?: string
}

const InfoLine: FC<InfoLineProps> = props => {
	return (
		<div className={`${style.companyInfoLine} ${props.infoClassname}`}>
			<div className={`${style.companyInfoLinePart} ${props.partClassname}`}>{props.children}</div>
			<span className={`${style.companyInfoLinePart} ${props.partClassname}`}>{props.value}</span>
		</div>
	)
}

export default memo(InfoLine)
