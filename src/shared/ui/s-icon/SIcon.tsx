import styles from 'shared/ui/s-icon/styles.module.scss'

interface IProps {
  name: string
  reverse?: boolean
  className?: string
}

export const SIcon = ({ className = '', name, reverse = false }: IProps) => {
  const classes = `
    ${className}
    ${styles['s-icon']}
    ${styles[`s-icon--${name}`] ?? ''}
    ${reverse ? styles['reverse'] : ''}
  `.trim()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classes} width="1em" height="1em" aria-hidden="true">
      <use xlinkHref={`#${name}`} href={`#${name}`} />
    </svg>
  )
}
