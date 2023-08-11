import {FC, memo} from "react";
import Button from "@/ui/Button/Button";
import style from './UserPopup.module.scss'

const ButtonsForSelf: FC = () => {
  return (
    <>
      <Button className={style.commonButton}>

      </Button>
      <Button className={style.redButton}>

      </Button>
    </>
  )
}