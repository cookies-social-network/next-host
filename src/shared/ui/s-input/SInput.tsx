import { useState } from 'react'

import styles from 'shared/ui/s-input/styles.module.scss'

interface IProps {
  label?: string
  inputMode?: 'tel' | 'email' | 'numeric' | 'text' // TODO: Расширить пул модов.
  type?: 'textarea' | 'text' | 'color' | 'url' | 'search' | 'tel' | 'password' | 'email' | 'number'
  autoComplete?: 'none' | 'new-password'
  searchable?: boolean
  disabled?: boolean
}

export const SInput = ({
  label,
  inputMode = 'text',
  autoComplete = 'new-password',
  type = 'text',
  searchable = false,
  disabled = false,
}: IProps) => {
  const [value, setValue] = useState<string | number>('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFocus, setIsFocus] = useState(false) // TODO: Добавить логику для фокуса.(Обводка активного инпута)

  if (value) {
    // TODO: Добавить логику значения.
  }

  if (searchable) {
    // TODO: Добавить логику поиска.
  }

  if (disabled) {
    // TODO: Добавить логику блокировки инпута.
  }

  return (
    <div className={styles['s-input']}>
      <div className={styles['s-input__wrapper']}>
        <div>{label}</div>
        <input
          className={styles['s-input__inner']}
          inputMode={inputMode}
          type={type}
          autoComplete={autoComplete}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  )
}
