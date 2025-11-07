import { Location } from '@/types'
import { SuggestList } from '../SuggestList'

interface LocationDropdownContentSuggestionsProps {
  suggestions: Location[]
  value: string
}

export const LocationDropdownContentSuggestions: React.FC<
  LocationDropdownContentSuggestionsProps
> = ({ suggestions, value }) => {
  return suggestions.length > 0 ? (
    <div className="w-[300px] pt-3 flex flex-col">
      <SuggestList suggestions={suggestions} value={value} />
    </div>
  ) : null
}
