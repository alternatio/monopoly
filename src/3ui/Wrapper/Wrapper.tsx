import { motion } from 'framer-motion'
import {
	Dispatch,
	FC,
	memo,
	ReactNode,
	SetStateAction,
} from 'react'
import style from './styles/Wrapper.module.scss'

interface WrapperProps {
	maxWidth: string
	children?: ReactNode
	setScrollPosition?: Dispatch<SetStateAction<number>>
}

const Wrapper: FC<WrapperProps> = props => {
	// const [scroll, setScroll] = useState<number>(100)
	//
	// useEffect(() => {
	// 	document.addEventListener('wheel', (e) => {
	// 		setScroll(prev => prev += e.deltaY)
	// 		console.log(e)
	// 	})
	// 	const callScroll = requestAnimationFrame(() => console.log(scrollY))
	// }, [])

	return (
		<motion.div
			onScroll={e => {
				props.setScrollPosition &&
					props.setScrollPosition(e.currentTarget.scrollTop)
				console.log(e.currentTarget.scrollTop)
			}}
			// animate={{y: `${scroll}px`}}
			className={style.wrapper}>
			<div className={style.scroller}></div>
			<div
				style={{ width: `min(100%, ${props.maxWidth})` }}
				className={style.innerWrapper}>
				{props.children}
			</div>
		</motion.div>
	)
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
