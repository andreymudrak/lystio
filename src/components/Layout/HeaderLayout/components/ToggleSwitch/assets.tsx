import React from 'react'

export type ToggleKey = 'rent' | 'buy' | 'lystioAI'

export const TOGGLE_OPTIONS: {
  key: ToggleKey
  label: React.ReactNode
  className: string
}[] = [
  { key: 'rent', label: 'Rent', className: 'w-[60px]' },
  { key: 'buy', label: 'Buy', className: 'w-[54px]' },
  {
    key: 'lystioAI',
    label: (
      <>
        Lystio&nbsp;
        <span className="font-semibold bg-ai bg-clip-text text-transparent">
          AI
        </span>
      </>
    ),
    className: 'w-[88px]',
  },
]

export default TOGGLE_OPTIONS
