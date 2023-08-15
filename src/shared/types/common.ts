import { ReactElement } from 'react'

export type SPositionsType = 'left' | 'right' | 'top' | 'bottom'

export type SPositionCornersType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type SPositionWithCornersType = SPositionsType & SPositionCornersType

export type SAppearancesType = 'primary' | 'secondary' | 'tertiary'

export type SlotsType = Record<string, ReactElement>
