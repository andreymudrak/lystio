'use client'

import usePropertiesStore from '@/store/usePropertiesStore'
import useSearchStore from '@/store/useSearchStore'
import { PropertiesData } from '@/types'
import { cn } from '@/utils/classNames'

const getText = (data: PropertiesData) => {
  return `${data.count} ${data.category || 'Listings'} for ${data.rentType} ${
    data.location ? `in ${data.location}` : ''
  }`
}

export default function HomePage() {
  const { data } = usePropertiesStore()
  const { active } = useSearchStore()

  return (
    <div className="flex-1 flex relative">
      <div
        className={cn(
          'hidden md:block absolute top-0 left-0 right-0 bg-[#00000066] h-full w-full transition-all duration-500',
          active ? 'opacity-30 z-10' : 'opacity-0 -z-10'
        )}
      />
      <div className="flex-1 hidden md:block" />
      <div className="h-full w-full md:w-1/3 flex flex-col bg-white">
        <div className="pb-3 pt-[22px] md:py-6 px-4 md:px-[18px] md:border-b border-b-black-10">
          <p>{getText(data)}</p>
        </div>
      </div>
    </div>
  )
}
