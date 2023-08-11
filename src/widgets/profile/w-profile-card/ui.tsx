import React from 'react'

import { FAddToFriends } from 'features/friends/f-add-to-friends'

import { EProfileCard } from 'entities/profile/e-profile-card'

export const WProfileCard = () => {
  return (
    <EProfileCard
      slots={{
        addToFriends: <FAddToFriends />,
      }}
    />
  )
}
