import { FC, ReactElement, ReactNode } from 'react'

import { SAppearancesType } from 'shared/types'
import { SButtonPositionType } from 'shared/ui/s-button/types'

interface IProps {
  appearance?: keyof SAppearancesType
  icon?: ReactElement
  iconPosition?: SButtonPositionType
  children?: ReactNode
}

export const SButton: FC<IProps> = ({ appearance = 'primary', icon, children }) => {
  return (
    <>
      {appearance}
      {icon}
      <button>{children}</button>
    </>
  )
}
