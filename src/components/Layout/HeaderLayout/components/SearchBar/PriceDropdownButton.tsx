'use client'

import { PropsWithChildren } from 'react'

import { cn } from '@/utils/classNames'

interface PriceDropdownButtonProps extends PropsWithChildren {
  active: boolean
  onClick: () => void
}

export const PriceDropdownButton: React.FC<PriceDropdownButtonProps> = ({
  active,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-corner-small px-2.5 h-11 flex items-center w-full transition-colors duration-500',
        active ? 'border-2 border-main' : 'border border-black-10 text-black/40'
      )}
    >
      {children}
    </button>
  )
}
