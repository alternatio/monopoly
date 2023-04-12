import { NextPage } from 'next'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import Wrapper from '@/ui/Wrapper/Wrapper'

const Page: NextPage = () => {
	return (
		<>
			<Header maxWidth={'60rem'} />
			<Wrapper maxWidth={'60rem'} marginTop={'5.5rem'}>
				<Hero />
			</Wrapper>
		</>
	)
}

export default Page
