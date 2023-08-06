import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: IProps) => {
  return <div>{children}</div>
}
