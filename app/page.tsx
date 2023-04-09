import { NextPage } from 'next'
import Wrapper from '@/ui/Wrapper/Wrapper'
import Header from '@/ui/Header/Header'

const Page: NextPage = () => {
	const maxWidth = '70rem'

	return (
		<Wrapper maxWidth={maxWidth}>
			<Header maxWidth={maxWidth} />
		</Wrapper>
	)
}

export default Page
