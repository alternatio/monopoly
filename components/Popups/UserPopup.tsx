import {FC, memo, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "@/store/index";
import {AnimatePresence} from "framer-motion";
import PopupBlock from "@/components/Popups/PopupBlock";
import style from "@/components/Session/Users/Users.module.scss";
import Image from "next/image";
import {userDataI, userGameDataI} from "@/store/interfaces/user";

interface UserPopupProps {
    userData: userDataI
    userGameData: userGameDataI
}


interface CommonInfoLineProps {
    title: string
    value: string
}


const CommonInfoLine: FC<CommonInfoLineProps> = ({title, value}) => {
    return (
        <div>
            <span className={style.info}>{title}</span>
            <span className={style.info}>{value}</span>
        </div>
    )
}

const UserPopup: FC<UserPopupProps> = props => {
    const currentPopup = useAppSelector(state => state.popups.currentPopup)
    const [isLoading, handleLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        handleLoading(false)
    }, [currentPopup])

    return (
        <AnimatePresence>
            {currentPopup === 0 && (
                <PopupBlock style={{background: 'var(--colorBlackB)'}}>
                        <div className={style.userInfoWrapper}>
                            <div className={style.avatarWrapper}>
                                {props.userData?.avatar && props.userGameData && (
                                    <>
                                        <Image
                                            className={style.avatar}
                                            src={props.userData.avatar}
                                            alt={'avatar'}
                                            width={50}
                                            height={50}
                                        />
                                        <div
                                            className={style.circle}
                                            style={{ border: `${props.userGameData.color.hex} solid 2px` }}
                                        />
                                    </>
                                )}
                            </div>
                            <div className={style.userCommonInfo}>
                                <div>
                                    <p className={style.userName}></p>
                                    <p>|</p>
                                    <p className={style.userColor}></p>
                                </div>
                                <div>
                                    <p className={style.userEmail}></p>
                                </div>
                            </div>
                            <div className={style.userMoneyInfo}>

                            </div>
                        </div>

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
