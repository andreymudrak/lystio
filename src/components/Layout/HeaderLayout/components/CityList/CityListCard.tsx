'use client'

import Image from 'next/image'

import FilledCheckIcon from '@/assets/icons/FilledCheckIcon'
import { cn } from '@/utils/classNames'

interface CityListCardProps {
  selected?: boolean
  onClick: () => void
  numSelected: string | number
  name: string
}

export const CityListCard: React.FC<CityListCardProps> = ({
  name,
  selected = false,
  onClick,
  numSelected,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-md duration-400 transition-colors duration-500',
        selected
          ? 'border border-main p-[3px] shadow-[0px_14px_32px_0px_#0000001A]'
          : 'p-1'
      )}
    >
      <div className="relative w-full aspect-square">
        <Image
          className="rounded-md"
          src="/images/city.png"
          alt={name}
          layout="fill"
          objectFit="contain"
        />
        {selected ? (
          <FilledCheckIcon className="absolute top-0.5 right-1" />
        ) : null}
      </div>
      <p className="text-start">{name}</p>
      <p
        className={cn(
          'text-10px text-start duration-500',
          selected ? 'text-main' : 'text-black-shade'
        )}
      >
        {numSelected}&nbsp;Districts
      </p>
    </button>
  )
}
