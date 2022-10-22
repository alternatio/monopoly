import React, {FC} from "react";
import {motion} from "framer-motion";
import style from "/styles/components/networkErrorPopup.module.scss";

const NetworkErrorPopup: FC = () => {
	return (
		<motion.div
			initial={{top: '-10rem'}}
			animate={{top: '3rem'}}
			exit={{top: '-10rem'}}
			className={style.networkPopup}>
			Ошибка сети
		</motion.div>
	)
}

export default React.memo(NetworkErrorPopup)