'use client'

import { useState } from 'react'

import BuildingIcon from '@/assets/icons/BuildingIcon'
import RightIcon from '@/assets/icons/RightIcon'
import Dropdown from '@/components/UI/Dropdown'
import { cn } from '@/utils/classNames'
import useSearchStore from '@/store/useSearchStore'
import { categories } from './mockData'

export const CategoryDropdown: React.FC = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false)
  const { setCategory, filters, setActiveFilter } = useSearchStore()

  const { category } = filters

  const handleOpen = () => {
    setShowPopover(true)
    setActiveFilter('category')
  }

  const handleClose = () => {
    setShowPopover(false)
    setActiveFilter(null)
  }

  return (
    <div className="w-full">
      <p className="text-xs">Category</p>
      <Dropdown
        trigger={
          <button
            className={cn(
              'h-[22px] w-full text-start',
              category ? 'text-black' : 'text-black/40'
            )}
            onClick={handleOpen}
          >
            {category ? category.name : 'Select Category'}
          </button>
        }
        onClose={handleClose}
        isOpen={showPopover}
        dropdownClassName="w-[290px] pt-3 -left-3"
      >
        <div className="px-4 mb-3">
          <p className="font-semibold text-base">Category</p>
        </div>
        <div>
          {categories.map(({ id, name }) => {
            return (
              <button
                key={id}
                className={cn(
                  'flex gap-2 px-3 items-center w-full h-10 duration-300 hover:bg-main-hover',
                  category?.id === id ? 'text-main' : ''
                )}
                onClick={() => setCategory({ id, name })}
              >
                <BuildingIcon className="text-inherit" />
                {name}
                <RightIcon className="ml-auto" />
              </button>
            )
          })}
        </div>
      </Dropdown>
    </div>
  )
}

export default CategoryDropdown
