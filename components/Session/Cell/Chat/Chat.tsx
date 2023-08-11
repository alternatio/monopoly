import { FC } from 'react'
import style from './Chat.module.scss'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cell/CellBlock'
import ChatInput from '@/components/Session/Cell/Chat/ChatInput'
import ChatTape from '@/components/Session/Cell/Chat/ChatTape'
import SessionInfo from '@/components/Session/Cell/Chat/SessionInfo'
import CompanyPopup from '@/components/Session/Popups/CompanyPopup'
import UserPopup from "@/components/Session/Popups/UserPopup";

interface Props {
	data: cellI
}

const Chat: FC<Props> = props => {
	if (props.data.data.type === 'chat') {
		return (
			<CellBlock
				cell={props.data}
				// styles={{
				// 	background: 'var(--colorStroke)',
				// 	border: 'var(--colorGray) solid 1px',
				// }}
			>
				<div className={style.chat}>
					<ChatInput />
					<ChatTape />
					<SessionInfo />
					<CompanyPopup />
					<UserPopup />
				</div>
			</CellBlock>
		)
	} else return null
}

export default Chat
