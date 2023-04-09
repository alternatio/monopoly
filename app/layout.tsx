import '@/styles/globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<head>
				<title>Monopoly</title>
			</head>
			<body>{children}</body>
		</html>
	)
}
