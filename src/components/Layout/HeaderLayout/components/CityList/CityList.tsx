'use client'

import useSearchStore from '@/store/useSearchStore'
import { Location } from '@/types'
import { CityListCard } from './CityListCard'

interface CityListProps {
  boundaries: Location[]
}

export const CityList: React.FC<CityListProps> = ({ boundaries }) => {
  const { filters, updateFilters } = useSearchStore()

  const getNumSelected = (selected: boolean, length: number) => {
    return selected ? filters.districts.length || 'All' : length
  }

  return (
    <div>
      <p className="text-neutral mb-2">By City</p>
      <div className="grid grid-cols-3 gap-1">
        {boundaries.map((boundary) => {
          const selected = filters.location?.id === boundary.id
          return (
            <CityListCard
              key={boundary.id}
              onClick={() => {
                updateFilters({
                  location: boundary,
                  districts: [],
                })
              }}
              selected={selected}
              numSelected={getNumSelected(selected, boundary.children.length)}
              name={boundary.name}
            />
          )
        })}
      </div>
    </div>
  )
}
