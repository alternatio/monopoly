import {FC, memo, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "@/store/index";
import {AnimatePresence} from "framer-motion";
import PopupBlock from "@/components/Popups/PopupBlock";

const UserPopup: FC = () => {
    const currentPopup = useAppSelector(state => state.popups.currentPopup)
    const [isLoading, handleLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        handleLoading(false)
    }, [currentPopup])

    return (
        <AnimatePresence>
            {currentPopup === 0 && (
                <PopupBlock title={''}>

                    {/*<Button className={style.button}>*/}
                    {/*	<Image src={githubIcon} alt={'githubIcon'} />*/}
                    {/*	<span>Войти через Github</span>*/}
                    {/*</Button>*/}
                </PopupBlock>
            )}
        </AnimatePresence>
    )
}

export default memo(UserPopup)
