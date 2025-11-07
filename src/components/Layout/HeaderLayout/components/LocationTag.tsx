'use client'

import useSearchStore from '@/store/useSearchStore'
import CloseFilledIcon from '@/assets/icons/CloseFilledIcon'
import { cn } from '@/utils/classNames'

interface LocationTagProps {
  name: string
  count: number
  className?: string
}

export const LocationTag: React.FC<LocationTagProps> = ({
  name,
  count,
  className,
}) => {
  const { updateFilters } = useSearchStore()

  return (
    <div
      className={cn(
        'bg-main-10 h-full rounded-full flex items-center w-fit',
        className
      )}
    >
      <span className="text-sm overflow-hidden truncate text-nowrap">
        {name}&nbsp;
        {count > 0 ? `· ${count} Districts` : null}
      </span>
      <button
        className="ml-0.5"
        onClick={() =>
          updateFilters({
            location: null,
            districts: [],
          })
        }
      >
        <CloseFilledIcon />
      </button>
    </div>
  )
}
