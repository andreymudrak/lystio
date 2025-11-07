import { Location } from '@/types'
import { DrawButton } from '../DrawButton'
import { DistrictList } from './components/DistrictList'
import { StateList } from '../StateList'
import { CityList } from '../CityList'

interface LocationDropdownContentPopularProps {
  boundaries: Location[]
}

export const LocationDropdownContentPopular: React.FC<
  LocationDropdownContentPopularProps
> = ({ boundaries }) => {
  return (
    <>
      <div className="w-[300px] pt-2 h-full flex flex-col">
        <div className="px-3">
          <DrawButton className="mb-2" />
        </div>
        <div className="flex-1 overflow-auto custom-scrollbar px-3">
          <div className="mb-3">
            <CityList boundaries={boundaries} />
          </div>
          <StateList />
        </div>
      </div>
      <DistrictList />
    </>
  )
}
