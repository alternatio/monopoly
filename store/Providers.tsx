'use client'

import { Provider } from 'react-redux'
import store from '@/store/index'
import { FC, ReactNode } from 'react'

interface ProvidersI {
	children: ReactNode
}

const Providers: FC<ProvidersI> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default Providers
