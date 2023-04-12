import { Dispatch, SetStateAction, useEffect } from 'react'
import { random } from '@/lib/commonFunctions'

export const useVariableText = (
	setText: Dispatch<SetStateAction<string>>,
	delay: number,
	arrayOfTexts: string[]
) => {
	useEffect(() => {
		setInterval(() => {
			setText(arrayOfTexts[random(0, arrayOfTexts.length - 1)])
		}, delay)
	}, [])
}
