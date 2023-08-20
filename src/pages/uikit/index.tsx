import React, { useState } from 'react'

import { WProfileCard } from 'widgets/profile/w-profile-card'

import { SButton, SInput, SSlider } from 'shared/ui'

const UiKit = () => {
  const [value, setValue] = useState(1)

  // TODO: Вынести в отдельный компонент изменения переменной в зависимости от слайдера.
  const handlePageOffsetChange = (offset: number) => {
    const suffix = 'px'

    setValue(offset)

    // Изменение переменной css
    document.documentElement.style.setProperty('--page-size', `${offset}${suffix}`)
  }

  return (
    <div>
      <h1>UIkit</h1>

      <SButton appearance={'primary'}>Some test text</SButton>

      <SInput label={'Email'} />

      <div className="d-flex">
        <SSlider value={value} onChange={handlePageOffsetChange} />

        <div className="offset-test">123</div>
      </div>

      <WProfileCard />
    </div>
  )
}

export default UiKit
