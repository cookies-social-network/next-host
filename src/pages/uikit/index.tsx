import React from 'react'

import { WProfileCard } from 'widgets/profile/w-profile-card'

import { SButton, SInput } from 'shared/ui'

import { SIcon } from '@/shared/ui/s-icon/SIcon'

const UiKit = () => {
  return (
    <div>
      <h1>UIkit</h1>

      <div style={{ display: 'block', flexDirection: 'column' }}>
        <SButton appearance={'primary'}>primary</SButton>
        <SButton appearance={'secondary'}>secondary</SButton>
        <SButton appearance={'tertiary'}>tertiary</SButton>
      </div>
      <SInput label={'Email'} />

      <WProfileCard />

      <SIcon className={'color-red'} name={'close'} />
    </div>
  )
}

export default UiKit
