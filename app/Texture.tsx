import { FC, memo } from 'react'
import style from './Texture.module.scss'
import Image from 'next/image'
import { textureImage } from '@/lib/importImage'

const Texture: FC = () => {
	return (
		<Image className={style.texture} src={textureImage} alt={'textureImage'} width={2000} height={2000} />
	)
}

export default memo(Texture)
