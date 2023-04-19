import { FC, memo, ReactNode } from 'react'
import style from './Popup.module.scss'
import {useAppDispatch} from "@/store/index";
import {setCurrentPopup} from "@/store/reducers/popups";

interface PopupWrapperI {
	children: ReactNode
}

const PopupWrapper: FC<PopupWrapperI> = props => {
	const dispatch = useAppDispatch()

	return (
		<div className={style.wrapper}>
			<div
				className={style.wrapperHandle}
				onClick={() => dispatch(setCurrentPopup(-1))}
			/>
			{props.children}
		</div>
	)
}

export default memo(PopupWrapper)
