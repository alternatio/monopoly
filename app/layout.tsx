import '@/styles/globals.scss'
import { ReactNode } from 'react'
import Providers from "@/store/Providers";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<head>
				<title>Monopoly</title>
			</head>
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
