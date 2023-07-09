import { Dispatch, SetStateAction, useEffect } from 'react'

export const useHeaderVisible = (
	handleHeaderVisible: Dispatch<SetStateAction<boolean>>
) => {
	let lastPosition = 0

	const scrollEvent = () => {
		if (scrollY > lastPosition) {
			handleHeaderVisible(false)
		} else if (scrollY < lastPosition) {
			handleHeaderVisible(true)
		}
		lastPosition = scrollY
	}

	useEffect(() => {
		document.addEventListener('scroll', scrollEvent)

		return () => {
			document.removeEventListener('scroll', scrollEvent)
		}
	}, [])
}
