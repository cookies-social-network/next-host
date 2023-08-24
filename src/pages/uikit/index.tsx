import React from 'react'

import { WProfileCard } from 'widgets/profile/w-profile-card'

import { SInput } from 'shared/ui'

import { SButton } from '@/shared/ui/s-button/SButton'
import { SIcon } from '@/shared/ui/s-icon/SIcon'

const UiKit = () => {
  return (
    <div>
      <h1>UIkit</h1>

      <div style={{ display: 'block', flexDirection: 'column' }}>
        <SButton appearance={'primary'}>primary</SButton>
        <SButton appearance={'secondary'}>secondary</SButton>
        <SButton disabled={true} icon={<SIcon name={'close'} />} />
      </div>
      <SInput label={'Email'} />

      <WProfileCard />

      <SIcon className={'color-red'} name={'close'} />
    </div>
  )
}

export default UiKit
