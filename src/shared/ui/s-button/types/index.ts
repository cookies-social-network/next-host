import { SPositionsType } from 'shared/types'

export type SButtonPositionType = Exclude<SPositionsType, 'top' | 'bottom'>
