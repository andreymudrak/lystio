export const RENT = 'rent' as const
export const BUY = 'buy' as const

export type RentTypeValue = typeof RENT | typeof BUY
