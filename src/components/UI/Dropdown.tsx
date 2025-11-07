'use client'

import { cn } from '@/utils/classNames'
import { PropsWithChildren, ReactElement, useEffect, useRef } from 'react'

interface DropdownProps extends PropsWithChildren {
  trigger: ReactElement<HTMLInputElement>
  isOpen: boolean
  onClose: () => void
  className?: string
  dropdownClassName?: string
  fullWidth?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  isOpen,
  onClose,
  dropdownClassName,
  className,
  children,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {trigger}
      <div
        className={cn(
          'absolute rounded-corner-large shadow-[0px_30px_70px_0px_#00000040] bg-white box-content top-[44px] overflow-hidden transition-all duration-500',
          isOpen ? 'opacity-100 h-[490px]' : 'opacity-0 h-0',
          dropdownClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
