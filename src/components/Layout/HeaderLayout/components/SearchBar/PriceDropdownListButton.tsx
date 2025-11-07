'use client'

import { PropsWithChildren } from 'react'

import CheckIcon from '@/assets/icons/CheckIcon'
import { cn } from '@/utils/classNames'

interface PriceDropdownListButtonProps extends PropsWithChildren {
  onClick: () => void
  disabled?: boolean
  className?: string
  selected?: boolean
}

export const PriceDropdownListButton: React.FC<
  PriceDropdownListButtonProps
> = ({ onClick, className, disabled = false, selected = false, children }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'text-start px-3 min-h-[38px] flex justify-between items-center disabled:text-black/30',
        selected ? 'transition-colors duration-500 bg-main-hover' : '',
        className
      )}
      disabled={disabled}
    >
      {children}
      {selected ? <CheckIcon /> : null}
    </button>
  )
}
