'use client'

import { states } from './mockData'
import useSearchStore from '@/store/useSearchStore'
import { StateListCard } from './StateListCard'

export const StateList: React.FC = () => {
  const { filters, updateFilters } = useSearchStore()

  const getNumSelected = (selected: boolean, length: number) => {
    return selected ? filters.districts.length || 'All' : length
  }

  return (
    <div>
      <p className="text-neutral mb-2">By State</p>
      <div className="flex flex-col gap-1">
        {states.map((state) => {
          const selected = filters.location?.id === state.id
          return (
            <StateListCard
              key={state.id}
              onClick={() => {
                updateFilters({
                  location: state,
                  districts: [],
                })
              }}
              name={state.name}
              selected={selected}
              numSelected={getNumSelected(selected, state.children.length)}
            />
          )
        })}
      </div>
    </div>
  )
}
