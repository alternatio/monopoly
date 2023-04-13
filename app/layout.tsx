import '@/styles/globals.scss'
import { ReactNode } from 'react'
import Texture from './Texture'

export default function RootLayout({ children }: { children: ReactNode }) {

	return (
		<html lang='ru'>
			<head>
				<title>Monopoly</title>
			</head>
			<body>
				<Texture />
				{children}
			</body>
		</html>
	)
}
