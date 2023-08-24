import { AppearancesType, SPositionsType } from 'shared/types'

export type SButtonPositionType = Exclude<SPositionsType, 'top' | 'bottom'>

export type ButtonAppearancesType = AppearancesType | 'link'

export type ButtonSizeType = 'md' | 'sm'
