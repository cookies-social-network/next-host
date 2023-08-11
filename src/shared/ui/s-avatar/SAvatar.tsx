import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import styles from 'shared/ui/s-avatar/style.module.scss'

// TODO: Добавить скелетон
// TODO: Добавить проверку на ошибку изображения
interface IProps {
  src: string | StaticImport
  className?: string
  emptyImage?: string
  width?: number
  height?: number
  editable?: boolean
  alt?: string
}

export const SAvatar = ({
  src,
  className = '',
  emptyImage = '',
  width = 24,
  height = 24,
  editable = false,
  alt = '', // TODO: Разобраться с кейсом. Если alt пустой, то не добавлять атрибут.
}: IProps) => {
  if (editable) {
    //TODO: Если можно менять аватарку при клике на аватарку,то логика
  }

  if (emptyImage) {
    return <div>Empty image</div>
  }

  return (
    <Image
      className={`${styles['s-avatar__image']} ${className}`}
      src={src}
      objectFit="cover"
      height={height}
      width={width}
      alt={alt}
    />
  )
}
