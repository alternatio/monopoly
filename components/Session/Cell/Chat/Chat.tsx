import { FC } from 'react'
import style from './Chat.module.scss'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'
import ChatInput from '@/components/Session/Cell/Chat/ChatInput'
import ChatTape from "@/components/Session/Cell/Chat/ChatTape";
import SessionInfo from "@/components/Session/Cell/Chat/SessionInfo";

interface ChatI {
	cell: cellI
}

const Chat: FC<ChatI> = props => {
	if (props.cell.data.type === 'chat') {
		return (
			<CellBlock
				cell={props.cell}
				styles={{
					background: 'var(--colorStroke)',
					border: 'var(--colorGray) solid 1px',
				}}
			>
				<div className={style.chat}>
					<ChatInput />
					<ChatTape />
					<SessionInfo />
				</div>
			</CellBlock>
		)
	} else return null
}

export default Chat
