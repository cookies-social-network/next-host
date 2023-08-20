import styles from 'shared/ui/s-icon/styles.module.scss'

interface IProps {
  name: string
  prefix?: string
  reverse?: boolean
  className?: string
}

// TODO: Изменить стиль написания классов.
export const SIcon = ({ className = '', name, reverse = false }: IProps) => {
  const isReverse = reverse ? 'reverse' : ''
  const classes = `${styles['s-icon']} ${className} ${isReverse}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classes} width="1em" height="1em" aria-hidden="true">
      <use xlinkHref={`#${name}`} href={`#${name}`} />
    </svg>
  )
}
