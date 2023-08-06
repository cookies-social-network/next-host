import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const BaseLayout = ({ children }: IProps) => {
  return (
    <div>
      header
      {children}
    </div>
  )
}
