'use client'

import { useState } from 'react'

import Dropdown from '@/components/UI/Dropdown'
import { useDebounce } from '@/hooks/useDebounce'
import { useSuggestions } from '@/hooks/useSuggestions'
import { useBoundaries } from '@/hooks/useBoundaries'
import useSearchStore from '@/store/useSearchStore'
import { LocationDropdownContentPopular } from './LocationDropdownContentPopular'
import { LocationDropdownContentSuggestions } from './LocationDropdownContentSuggestions'
import { LocationTag } from '../LocationTag'

export const LocationDropdown: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [showPopover, setShowPopover] = useState(false)
  const { filters, setActiveFilter } = useSearchStore()
  const { location, districts } = filters

  const debouncedValue = useDebounce(value, 500)
  const { suggestions } = useSuggestions(debouncedValue)
  const { boundaries } = useBoundaries()

  const handleOpen = () => {
    setShowPopover(true)
    setActiveFilter('location')
  }

  const handleClose = () => {
    setShowPopover(false)
    setActiveFilter(null)
  }

  const handleFocus = () => {
    handleOpen()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="w-full relative">
      <p className="text-xs">Location</p>
      <div className="w-full h-[22px] flex gap-1 relative">
        {location ? (
          <LocationTag
            name={location.name}
            count={districts.length ?? location.children.length}
            className="max-w-[200px] px-1"
          />
        ) : null}
        <Dropdown
          trigger={
            <input
              type="text"
              value={value}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="w-full h-full text-sm placeholder-black/40 rounded-lg border border-none focus:outline-none bg-inherit truncate"
              placeholder="City District, Street, Postcode"
              aria-label="Location"
            />
          }
          isOpen={showPopover}
          onClose={handleClose}
          className="min-w-[calc(100%-200px)] flex-1 !static"
          dropdownClassName="w-fit flex -left-6"
        >
          {debouncedValue ? (
            <LocationDropdownContentSuggestions
              value={debouncedValue}
              suggestions={suggestions}
            />
          ) : (
            <LocationDropdownContentPopular boundaries={boundaries} />
          )}
        </Dropdown>
      </div>
    </div>
  )
}

export default LocationDropdown
