'use client'

import { useEffect } from 'react'

import useSearchStore from '@/store/useSearchStore'
import { cn } from '@/utils/classNames'
import SearchLightIcon from '@/assets/icons/SearchLightIcon'
import { useSearch } from '@/hooks/useSearch'
import { useToggleSwitchStore } from '@/store/useToggleSwitchStore'
import LocationInput from './LocationDropdown'
import CategoryDropdown from './CategoryDropdown'
import PriceDropdown from './PriceDropdown'

const baseClassName =
  'border-y border-black-10 flex items-center box-border transition-all duration-500'

const leftChildClassName =
  'pl-6 pr-3 rounded-l-full border-l w-[250px] lg:w-[300px]'

const centerChildClassName =
  'px-3 flex-1 relative before:block before:w-px before:h-10 before:bg-black-10 before:absolute before:left-0 after:block after:w-px after:h-10 after:bg-black-10 after:absolute after:right-0'

const rightChildClassName =
  'border-r rounded-r-full pl-3 pr-28 w-[250px] lg:w-[300px]'

export const SearchBar: React.FC = () => {
  const { selected: rentType } = useToggleSwitchStore()
  const { setRentType, active } = useSearchStore()
  const { onSearch, loading } = useSearch()

  useEffect(() => {
    if (rentType === 'rent' || rentType === 'buy') {
      setRentType(rentType)
    }
  }, [rentType, setRentType])

  useEffect(() => {
    onSearch()
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-[65px] max-w-[850px] w-full flex relative">
        <div
          className={cn(
            baseClassName,
            leftChildClassName,
            active === 'location' ? 'bg-white' : 'bg-main-hover'
          )}
        >
          <LocationInput />
        </div>
        <div
          className={cn(
            baseClassName,
            centerChildClassName,
            active === 'category' ? 'bg-white' : 'bg-main-hover'
          )}
        >
          <CategoryDropdown />
        </div>
        <div
          className={cn(
            baseClassName,
            rightChildClassName,
            active === 'price' ? 'bg-white' : 'bg-main-hover'
          )}
        >
          <PriceDropdown />
        </div>
        <button
          className="absolute right-2 h-12 px-3 top-1/2 -translate-y-1/2 bg-main text-white rounded-full flex gap-2 items-center text-base"
          onClick={onSearch}
          disabled={loading}
        >
          <SearchLightIcon className="size-4 text-white" />
          Search
        </button>
      </div>
    </div>
  )
}
