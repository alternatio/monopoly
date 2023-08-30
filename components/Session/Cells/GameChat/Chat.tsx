import { FC } from 'react'
import style from './Chat.module.scss'
import { cellI } from '@/store/interfaces/cell'
import CellBlock from '@/components/Session/Cells/CellBlock'
import ChatInput from '@/components/Session/Cells/GameChat/ChatInput'
import ChatTape from '@/components/Session/Cells/GameChat/ChatTape'
import SessionInfo from '@/components/Session/Cells/GameChat/SessionInfo'
import CompanyPopup from '@/components/Session/Popups/GameInfo/CompanyPopup'
import UserPopup from "@/components/Session/Popups/GameInfo/UserPopup";
import MovePopup from "@/components/Session/Popups/GameActions/MovePopup";

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
					<MovePopup />
				</div>
			</CellBlock>
		)
	} else return null
}

export default Chat
