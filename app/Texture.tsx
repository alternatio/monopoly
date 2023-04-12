import { FC, memo } from 'react'
import style from './Texture.module.scss'
import Image from 'next/image'
import { textureImage } from '@/lib/importImage'

const Texture: FC = () => {
	return (
		<Image className={style.texture} src={textureImage} alt={'textureImage'} width={1200} height={1200} quality={60} />
	)
}

export default memo(Texture)
