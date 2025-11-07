'use client'

import { useState } from 'react'

import Modal from '@/components/UI/Modal'
import SearchLightIcon from '@/assets/icons/SearchLightIcon'
import useSearchStore from '@/store/useSearchStore'
import { cn } from '@/utils/classNames'
import { useSuggestions } from '@/hooks/useSuggestions'
import { useBoundaries } from '@/hooks/useBoundaries'
import { useDebounce } from '@/hooks/useDebounce'
import { SuggestList } from '../SuggestList'
import { LocationInput } from './LocationInput'
import { LocationTag } from '../LocationTag'
import { DrawButton } from '../DrawButton'
import { StateList } from '../StateList'
import { CityList } from '../CityList'

const baseClassName =
  'h-10 border border-black-10 bg-[#F7F7FD] rounded-full w-full'

export const LocationSearchModal: React.FC = () => {
  const { filters } = useSearchStore()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const debouncedValue = useDebounce(value, 500)
  const { suggestions } = useSuggestions(debouncedValue)
  const { boundaries } = useBoundaries()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      {filters.location ? (
        <div className={cn(baseClassName, 'px-2 py-[5px]')}>
          <LocationTag
            name="Vienna"
            count={filters.districts.length ?? filters.location.children.length}
            className="px-2 max-w-full"
          />
        </div>
      ) : (
        <button
          className={cn(baseClassName, 'pl-3 pr-4 flex items-center gap-1')}
          onClick={() => setIsOpen(true)}
        >
          <span className="flex-1 truncate text-black/40 text-11px text-start">
            City District, Street, Postcode
          </span>
          <SearchLightIcon className="size-3 text-black/40" />
        </button>
      )}
      <Modal title="Search" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mb-3 px-3">
          <LocationInput
            onChange={handleInputChange}
            onClear={() => setValue('')}
            value={value}
          />
        </div>
        {debouncedValue ? (
          <div className="w-full flex-1 overflow-auto custom-scrollbar">
            <SuggestList value={debouncedValue} suggestions={suggestions} />
          </div>
        ) : (
          <>
            <div className="px-3">
              <DrawButton className="mb-3" />
            </div>
            <div className="flex flex-col flex-1 overflow-auto custom-scrollbar px-3">
              <div className="mb-3">
                <CityList boundaries={boundaries} />
              </div>
              <StateList />
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
