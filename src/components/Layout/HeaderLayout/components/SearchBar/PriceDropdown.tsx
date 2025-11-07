'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

import { api } from '@/services/api'
import { getFetchFilters } from '@/utils/filters'
import { calcPrice } from '@/utils/calcPrice'
import useSearchStore from '@/store/useSearchStore'
import Dropdown from '@/components/UI/Dropdown'
import Checkbox from '@/components/UI/Checkbox'
import { formatCurrency } from '@/utils/formatters'
import { PriceDropdownListButton } from './PriceDropdownListButton'
import { PriceDropdownButton } from './PriceDropdownButton'
import usePriceHistoramStore from '@/store/usePriceHistoramStore'

const MIN = 'min' as const
const MAX = 'max' as const
type active = typeof MIN | typeof MAX

export const PriceDropdown: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { setPriceRange, filters, setActiveFilter } = useSearchStore()
  const { priceRange, fetchPriceHistogram } = usePriceHistoramStore()
  const [showPopover, setShowPopover] = useState<boolean>(false)
  const [active, setActive] = useState<active>(MIN)

  const isMax = active === MAX
  const [minValue, maxValue] = priceRange
  const [selectedMinValue, selectedMaxValue] = filters.priceRange

  const data = useMemo(() => {
    return calcPrice(priceRange, 18)
  }, [priceRange])

  const fetchData = useCallback(() => {
    const filterRequest = getFetchFilters(filters, false)
    fetchPriceHistogram(filterRequest)
  }, [filters.rentType, filters.location, filters.districts, filters.category])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    setPriceRange(priceRange)
  }, [priceRange])

  const handleOpen = () => {
    setShowPopover(true)
    setActiveFilter('price')
  }

  const handleClose = () => {
    setShowPopover(false)
    setActiveFilter(null)
  }

  const handleChange = (val: number) => {
    if (isMax) {
      setPriceRange([selectedMinValue, val])
    } else {
      setPriceRange([val, selectedMaxValue])
    }
  }

  return (
    <div className="w-full">
      <p className="text-xs">Price</p>
      <Dropdown
        trigger={
          <button
            ref={buttonRef}
            className="h-[22px] w-full text-start text-black/40 truncate"
            onClick={handleOpen}
          >
            Select Price Range
          </button>
        }
        onClose={handleClose}
        isOpen={showPopover}
        dropdownClassName="w-[300px] pt-3 -right-28 lg:-left-3 flex flex-col"
      >
        <div className="px-3 mb-4">
          <p className="font-semibold text-base mb-5">Price Range</p>
          <div className="flex gap-3">
            <div className="flex-1">
              <p className="mb-2">Min</p>
              <PriceDropdownButton
                onClick={() => setActive(MIN)}
                active={active === MIN}
              >
                {selectedMinValue === minValue
                  ? 'No Minimum'
                  : formatCurrency(selectedMinValue)}
              </PriceDropdownButton>
            </div>
            <div className="flex-1">
              <p className="mb-2">Max</p>
              <PriceDropdownButton
                onClick={() => setActive(MAX)}
                active={active === MAX}
              >
                {selectedMaxValue === maxValue
                  ? 'No Maximum'
                  : formatCurrency(selectedMaxValue)}
              </PriceDropdownButton>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto custom-scrollbar">
          <div className="flex flex-col h-full">
            <PriceDropdownListButton
              onClick={() => handleChange(isMax ? maxValue : minValue)}
              className={isMax ? 'flex-row-reverse' : ''}
              selected={
                isMax
                  ? selectedMaxValue === maxValue
                  : selectedMinValue === minValue
              }
            >
              {isMax ? 'No Maximum' : 'No Minimum'}
            </PriceDropdownListButton>
            {data.map((value, index) => {
              return (
                <PriceDropdownListButton
                  key={value + index}
                  className={isMax ? 'flex-row-reverse' : ''}
                  disabled={
                    isMax ? value < selectedMinValue : value > selectedMaxValue
                  }
                  onClick={() => handleChange(value)}
                  selected={
                    isMax
                      ? selectedMaxValue === value
                      : selectedMinValue === value
                  }
                >
                  {formatCurrency(value)}
                </PriceDropdownListButton>
              )
            })}
          </div>
        </div>
        <div className="border-t border-t-[#F2F2F2] py-[15px] px-3">
          <label className="flex items-center gap-2">
            <Checkbox />
            Show listings with “Price on Request”
          </label>
        </div>
      </Dropdown>
    </div>
  )
}

export default PriceDropdown
