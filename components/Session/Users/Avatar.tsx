import { FC, memo } from 'react'
import style from './Users.module.scss'
import Image from 'next/image'
import { userDataI, userGameDataI } from '@/store/interfaces/user'

interface AvatarProps {
	userData?: userDataI
	userGameData?: userGameDataI
}

const Avatar: FC<AvatarProps> = ({ userData, userGameData }) => {
	return (
		<div className={style.avatarWrapper}>
			{userData?.avatar ? (
				<>
					<Image
						className={style.avatar}
						src={userData.avatar}
						alt={'avatar'}
						width={50}
						height={50}
					/>
					{userGameData ? (
						<div
							className={style.circle}
							style={{ border: `${userGameData.color.hex} solid 2px` }}
						/>
					) : null}
				</>
			) : null}
		</div>
	)
}

export default memo(Avatar)
