import { RefObject, useEffect } from 'react'

export const useOnClickOutside = (
	ref: RefObject<HTMLElement | null>,
	handler: () => void,
	mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void => {
	useEffect(() => {
		const handleClickOutside = (event: UIEvent): void => {
			const target = event.target as HTMLElement
			if (ref.current && !ref.current.contains(target)) {
				handler()
			}
		}

		document.addEventListener(mouseEvent, handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
}
