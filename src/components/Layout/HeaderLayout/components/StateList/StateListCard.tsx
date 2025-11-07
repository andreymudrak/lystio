'use client'

import Image from 'next/image'

import RightIcon from '@/assets/icons/RightIcon'
import { cn } from '@/utils/classNames'

interface StateListCardProps {
  onClick: () => void
  name: string
  numSelected: number | string
  selected?: boolean
}

export const StateListCard: React.FC<StateListCardProps> = ({
  onClick,
  name,
  selected = false,
  numSelected,
}) => {
  return (
    <button
      className={cn(
        'p-2 flex justify-between items-center rounded-corner-small duration-500 hover:bg-main-hover',
        selected ? 'bg-main-hover' : ''
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="relative size-[38px] aspect-square">
          <Image
            className="rounded-md"
            src="/images/city.png"
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <p className="text-start">{name}</p>
          <p
            className={cn(
              'text-10px duration-500',
              selected ? 'text-main' : 'text-black-shade'
            )}
          >
            {numSelected}&nbsp;Districts
          </p>
        </div>
      </div>
      <RightIcon />
    </button>
  )
}
