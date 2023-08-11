import React from 'react'

import { WProfileCard } from 'widgets/profile/w-profile-card'

import { SButton, SInput } from 'shared/ui'

const UiKit = () => {
  return (
    <div>
      <h1>UIkit</h1>

      <SButton appearance={'primary'}>Some test text</SButton>

      <SInput label={'Email'} />

      <WProfileCard />
    </div>
  )
}

export default UiKit
