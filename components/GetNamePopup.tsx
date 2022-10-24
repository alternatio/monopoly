import React, {FC, useState} from "react";
import style from "/styles/components/GetNamePopup.module.scss";
import {motion} from "framer-motion";

interface GetNamePopupInterface {
	handleNameIsTaken: Function
}

const GetNamePopup: FC<GetNamePopupInterface> = ({handleNameIsTaken}) => {
	const [name, setName] = useState<string>('')

	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			className={style.wrapper}>
			<motion.div className={style.popup}>
				<h2 className={style.title}>
					Введите имя:
				</h2>
				<label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className={style.input} type="text"/>
				</label>
				<motion.button
					initial={{height: '0rem'}}
					animate={name && {height: '2.5rem'}}
					onClick={() => handleNameIsTaken(true)}
					className={style.button}>
					Продолжить
				</motion.button>
			</motion.div>
		</motion.div>
	)
}

export default React.memo(GetNamePopup)