import { ReactElement, ReactNode } from 'react'

import { AppearancesType, ButtonViewType, SizeType } from 'shared/types'
import styles from 'shared/ui/s-button/style.module.scss'

interface IProps {
  appearance?: AppearancesType
  disabled?: boolean
  icon?: ReactElement
  prefixIcon?: ReactElement
  postfixIcon?: ReactElement
  children?: ReactNode
  asLink?: ButtonViewType
  size?: SizeType
}

export const SButton = ({ appearance = 'primary', disabled = false, icon, children }: IProps) => {
  return (
    <>
      {appearance}
      {icon}
      <button className={`${styles['s-button']}`} disabled={disabled}>
        {children}
      </button>
    </>
  )
}
