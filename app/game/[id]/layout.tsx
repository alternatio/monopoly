import { FC, ReactNode } from 'react'
import Wrapper from '@/ui/Wrapper/Wrapper'

export const metadata = {
	title: 'Monopoly – Session game'
}

const SessionPageRoot: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Wrapper maxWidth={'120rem'} padding={'1rem 0'}>
			{children}
		</Wrapper>
	)
}

export default SessionPageRoot
