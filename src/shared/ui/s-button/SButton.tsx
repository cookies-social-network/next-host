import { ReactElement, ReactNode } from 'react'

import styles from 'shared/ui/s-button/style.module.scss'
import { ButtonAppearancesType, ButtonSizeType } from 'shared/ui/s-button/types'

interface IProps {
  appearance?: ButtonAppearancesType
  disabled?: boolean
  icon?: ReactElement
  prefixIcon?: ReactElement
  postfixIcon?: ReactElement
  children?: ReactNode
  loading?: boolean
  size?: ButtonSizeType
}

export const SButton = ({
  appearance = 'primary',
  disabled = false,
  icon,
  prefixIcon,
  postfixIcon,
  children,
  size = 'md',
}: IProps) => {
  const classes = `
    ${styles['s-button']}
    ${styles[`s-button--${appearance}`]}
    ${styles[`s-button--${size}`]}
    `.trim()

  return (
    <>
      <button className={classes} disabled={disabled}>
        {prefixIcon}
        {icon}
        {children}
        {postfixIcon}
      </button>
    </>
  )
}
