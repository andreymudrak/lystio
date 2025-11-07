'use client'

import Checkbox from '@/components/UI/Checkbox'
import useSearchStore from '@/store/useSearchStore'
import { cn } from '@/utils/classNames'

export const DistrictList: React.FC = () => {
  const { setDistricts, filters } = useSearchStore()
  const { districts, location } = filters

  return (
    <div
      className={cn(
        'flex flex-col border-l border-l-main-10 pt-[5px] max-h-full duration-500 overflow-x-hidden',
        location ? 'w-[270px]' : 'w-0'
      )}
    >
      {location ? (
        <>
          <div className="p-3 w-full">
            <p className="font-semibold text-lg truncate w-full">
              {location.name}
            </p>
          </div>
          <div className="border-b border-b-black-10">
            <label className="flex items-center gap-3 duration-500 hover:bg-main-hover py-1 px-3">
              <Checkbox
                checked={!districts.length}
                onChange={() => setDistricts(null)}
              />
              <span className="flex-1 truncate">
                All Districts
                <br />
                <span className="text-xs text-black/60">
                  {location.children.length}&nbsp;Districts
                </span>
              </span>
            </label>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {location.children.map(({ name, id }) => {
              return (
                <label
                  key={id}
                  className="flex items-center gap-3 duration-500 hover:bg-main-hover p-3 w-full"
                >
                  <Checkbox
                    checked={filters.districts.includes(id)}
                    onChange={() => setDistricts(id)}
                  />
                  <span className="flex-1 truncate">{name}</span>
                </label>
              )
            })}
          </div>
        </>
      ) : null}
    </div>
  )
}
