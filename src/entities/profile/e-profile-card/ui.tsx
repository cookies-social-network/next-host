import { ReactNode } from 'react'

import { renderSlot } from 'shared/lib/utils'
import { SlotsType } from 'shared/types'

interface IProps {
  slots: SlotsType
  children?: ReactNode
}

export const EProfileCard = ({ slots }: IProps) => {
  return (
    <div>
      Profile
      {renderSlot(slots.addToFriends)}
    </div>
  )
}
