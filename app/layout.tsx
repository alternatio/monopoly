import '@/styles/globals.scss'
import { ReactNode } from 'react'
import Wrapper from '@/ui/Wrapper/Wrapper'
import localFont from 'next/dist/compiled/@next/font/dist/local'

export default function RootLayout({ children }: { children: ReactNode }) {
	

	return (
		<html lang='ru'>
			<head>
				<title>Monopoly</title>
			</head>
			<body>
				<Wrapper maxWidth={'80rem'}>{children}</Wrapper>
			</body>
		</html>
	)
}
