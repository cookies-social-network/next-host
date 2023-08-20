import { ReactElement, ReactNode } from 'react'

import { SAppearancesType } from 'shared/types'
import styles from 'shared/ui/s-button/style.module.scss'
import { SButtonPositionType } from 'shared/ui/s-button/types'

interface IProps {
  appearance?: SAppearancesType
  icon?: ReactElement
  iconPosition?: SButtonPositionType
  children?: ReactNode
}

export const SButton = ({ appearance = 'primary', icon, children }: IProps) => {
  return (
    <>
      {appearance}
      {icon}
      <button className={`${styles['s-button']} ${styles['s-button--primary']}`}>{children}</button>
    </>
  )
}
