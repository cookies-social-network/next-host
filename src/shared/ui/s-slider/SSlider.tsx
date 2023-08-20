import { ChangeEvent, useState } from 'react'

import styles from 'shared/ui/s-slider/style.module.scss'

interface IProps {
  min?: number
  max?: number
  value: number
  step?: number
  defaultValue?: number
  onChange: (value: number) => void
}

export const SSlider = ({ min = 0, max = 100, value, step = 1, defaultValue = 0, onChange }: IProps) => {
  const [localValue, setLocalValue] = useState(defaultValue ?? value)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(Number(event.target.value))

    onChange(localValue)
  }

  return (
    <div className={styles['s-slider']}>
      <span className={styles['s-slider__bar']}>
        <span className={styles['s-slider__fill']} />
      </span>

      <input
        className={styles['s-slider__inner']}
        type={'range'}
        min={min}
        step={step}
        max={max}
        value={localValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
