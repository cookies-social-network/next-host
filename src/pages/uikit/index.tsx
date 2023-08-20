import React from 'react'

import { WProfileCard } from 'widgets/profile/w-profile-card'

import { SButton, SInput } from 'shared/ui'

import { SIcon } from '@/shared/ui/s-icon/SIcon'

const UiKit = () => {
  return (
    <div>
      <h1>UIkit</h1>

      <SButton appearance={'primary'}>Some test text</SButton>

      <SInput label={'Email'} />

      <WProfileCard />

      <SIcon className={'color-red'} name={'close'} />
    </div>
  )
}

export default UiKit
