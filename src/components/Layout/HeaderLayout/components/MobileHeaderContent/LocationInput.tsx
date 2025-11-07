'use client'

import ClearIcon from '@/assets/icons/ClearIcon'
import SearchLightIcon from '@/assets/icons/SearchLightIcon'

interface LocationInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}

export const LocationInput: React.FC<LocationInputProps> = ({
  value,
  onChange,
  onClear,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="City District, Street, Postcode"
        className="h-[46px] w-full rounded-full border border-black-10 bg-[#F7F7FD] pl-3 pr-[46px] focus:outline-main placeholder-black/40 "
      />
      {value ? (
        <button
          onClick={onClear}
          className="size-[30px] rounded-full flex items-center justify-center right-3 top-1/2 -translate-y-1/2 absolute"
        >
          <ClearIcon />
        </button>
      ) : (
        <SearchLightIcon className="absolute right-[18px] top-1/2 -translate-y-1/2 text-black/40" />
      )}
    </div>
  )
}
