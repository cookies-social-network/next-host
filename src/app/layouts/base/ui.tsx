import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const BaseLayout = ({ children }: IProps) => {
  return (
    <div>
      header
      <div className="container">{children}</div>
    </div>
  )
}
