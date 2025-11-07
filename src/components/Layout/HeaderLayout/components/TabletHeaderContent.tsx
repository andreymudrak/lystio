import Image from 'next/image'
import Link from 'next/link'

import { SearchBar } from './SearchBar'
import { ToggleSwitch } from './ToggleSwitch'

export const TabletHeaderContent = () => {
  return (
    <>
      <div className="w-full relative flex justify-center mb-[21px]">
        <Link
          href="/"
          className="flex items-center absolute left-0 top-1/2 -translate-y-1/2"
        >
          <Image
            src="/logo-lystio.svg"
            alt="Lystio"
            width={80}
            height={37}
            priority
          />
        </Link>
        <ToggleSwitch />
      </div>
      <SearchBar />
    </>
  )
}
