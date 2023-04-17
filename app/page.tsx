import { NextPage } from 'next'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import Wrapper from '@/ui/Wrapper/Wrapper'
import Main from '@/components/Home/Main'
import Questions from '@/components/Home/Questions'
import Footer from '@/components/Home/Footer'

const Page: NextPage = () => {
	return (
		<>
			<Header maxWidth={'60rem'} />
			<Wrapper maxWidth={'60rem'} marginTop={'5.5rem'} gap={'12.5rem'}>
				<Hero />
				<Main />
				<Questions />
				<Footer />
			</Wrapper>
		</>
	)
}

export default Page
