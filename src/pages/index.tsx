import React from 'react'

import { SButton } from 'shared/ui'
import { WProfileCard } from 'widgets/profile'

const Index = () => {
  return (
    <div>
      <h1>Home page</h1>

      <SButton appearance={'primary'}>Some test text</SButton>

      <WProfileCard />
    </div>
  )
}

export default Index
