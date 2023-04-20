import { NextPage } from 'next'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import Wrapper from '@/ui/Wrapper/Wrapper'
import Main from '@/components/Home/Main'
import Questions from '@/components/Home/Questions'
import Footer from '@/components/Home/Footer'
import GamePopup from '@/components/Popups/GamePopup'
import SighUpPopup from '@/components/Popups/SignUpPopup'
import CreateGamePopup from '@/components/Popups/CreateGamePopup'
import EnterInGamePopup from '@/components/Popups/EnterInGamePopup'
import HamburgerMenu from "@/components/Home/HamburgerMenu";

const Page: NextPage = () => {
	return (
		<>
			<Header maxWidth={'60rem'} />
			<Wrapper maxWidth={'60rem'} marginTop={'5.5rem'}>
				<Hero />
				<Main />
				<Questions />
				<Footer />

				<SighUpPopup />
				<GamePopup />
				<CreateGamePopup />
				<EnterInGamePopup />
				<HamburgerMenu />
			</Wrapper>
		</>
	)
}

export default Page
