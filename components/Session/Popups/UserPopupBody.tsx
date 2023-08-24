import { FC, memo } from 'react'
import style from './UserPopup.module.scss'
import { userI } from '@/store/interfaces/user'
import Avatar from '@/components/Session/Users/Avatar'
import InfoLine from '@/components/Session/Popups/InfoLine'
import {ButtonsForAnother, ButtonsForSelf} from "@/components/Session/Popups/UserPopupButtons";

interface UserPopupProps {
	user?: userI
	currentUser?: userI
}

const UserPopupBody: FC<UserPopupProps> = ({ user, currentUser }) => {
	return (
		<div className={style.userBody}>
			<div className={style.userTop}>
				<Avatar userData={user?.data} userGameData={user?.gameData} />
				<div className={style.userCommonData}>
					<div>
						<span className={style.name}>{user?.data?.name} | </span>
						<span className={style.color}>{user?.gameData?.color.title}</span>
					</div>
					<span className={style.email}>{user?.data?.email}</span>
				</div>
			</div>
			<div className={style.info}>
				<InfoLine
					infoClassname={style.infoParts}
					partClassname={style.infoPart}
					value={`${user?.gameData?.money} ¥`}>
					Капитал
				</InfoLine>
				<InfoLine
					infoClassname={style.infoParts}
					partClassname={style.infoPart}
					value={`25500 ¥`}>
					Стоимость активов
				</InfoLine>
				<InfoLine
					infoClassname={style.infoParts}
					partClassname={style.infoPart}
					value={`5`}>
					Количество компаний
				</InfoLine>
			</div>
			<div className={style.buttons}>
				{currentUser?.data?.uid === user?.data?.uid ? (
					<ButtonsForSelf />
				) : null}
				{currentUser?.data?.uid !== user?.data?.uid ? (
					<ButtonsForAnother />
				) : null}
			</div>
		</div>
	)
}

export default memo(UserPopupBody)
