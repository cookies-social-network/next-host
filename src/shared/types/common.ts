import { ReactElement } from 'react'

export type SPositionsType = {
  left: 'left'
  right: 'right'
  top: 'top'
  bottom: 'bottom'
}

export type SPositionCornersType = {
  'top-left': 'top-left'
  'top-right': 'top-right'
  'bottom-left': 'bottom-left'
  'bottom-right': 'bottom-right'
}

export type SPositionWithCornersType = SPositionsType & SPositionCornersType

export type SAppearancesType = {
  primary: 'primary'
  secondary: 'secondary'
  tertiary: 'tertiary'
}

export type SlotsType = Record<string, ReactElement>
