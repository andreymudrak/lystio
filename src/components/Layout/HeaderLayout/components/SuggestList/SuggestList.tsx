'use client'

import MarkerIcon from '@/assets/icons/MarkerIcon'
import useSearchStore from '@/store/useSearchStore'
import { Location } from '@/types'
import { HighlightText } from './HighlightText'

interface SuggestListProps {
  suggestions: Location[]
  value: string
}

export const SuggestList: React.FC<SuggestListProps> = ({
  suggestions,
  value,
}) => {
  const { updateFilters } = useSearchStore()
  return (
    <>
      {suggestions.map((suggestion) => {
        return (
          <button
            key={suggestion.id}
            className="px-3 flex items-center gap-2 text-start w-full h-[49px]"
            onClick={() =>
              updateFilters({
                location: suggestion,
                districts: [],
              })
            }
          >
            <div className="bg-main-hover size-6 flex items-center justify-center rounded-full">
              <MarkerIcon />
            </div>
            <div className="flex-1 overflow-hidden flex flex-col">
              <span className="max-w-full block truncate text-sm">
                <HighlightText value={value} text={suggestion.name} />
              </span>
              <span className="text-xs text-black/60">State</span>
            </div>
          </button>
        )
      })}
    </>
  )
}
