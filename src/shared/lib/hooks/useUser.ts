import { useState } from 'react'

import { UserType } from 'shared/types'

// TODO: useState на стороне сервера. Надо подумать над реализацией хуков на стороне сервера.
export const useUser = () => {
  const [user, setUser] = useState<UserType>({
    id: 1,
    name: 'Александр',
  })

  return {
    user,

    setUser,
  }
}
