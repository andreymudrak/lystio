'use client'

import FilterIcon from '@/assets/icons/FilterIcon'
import MapIcon from '@/assets/icons/MapIcon'
import NotificationIcon from '@/assets/icons/NotificationIcon'

const options = [
  {
    label: 'Filter',
    icon: FilterIcon,
    count: 12,
  },
  {
    label: 'Search Agent',
    icon: NotificationIcon,
  },
  {
    label: 'Map View',
    icon: MapIcon,
  },
]

export const UtilityButtons: React.FC = () => {
  return (
    <div className="flex gap-1.5">
      {options.map(({ label, icon: Icon, count }) => {
        return (
          <button
            key={label}
            className="h-10 flex-1 border border-black-10 rounded-corner-small flex items-center justify-center gap-1"
          >
            <Icon />
            {label}
            {count ? (
              <div className="rounded-full bg-main size-6 flex items-center justify-center text-xs font-semibold text-white">
                12
              </div>
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
