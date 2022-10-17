import {FC, ReactNode} from "react";
import style from '/styles/components/wrapper.module.scss'
import {motion} from "framer-motion";

const Wrapper: FC<{children?: ReactNode}> = (props) => {
	return (
		<div
			className={style.wrapper}>
			<div className={style.container}>
				{props.children}
			</div>
		</div>
	)
}

export default Wrapper