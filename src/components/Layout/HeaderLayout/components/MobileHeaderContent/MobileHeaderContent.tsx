'use client'

import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@/assets/icons/MenuIcon'
import useSearchStore from '@/store/useSearchStore'
import { useSearch } from '@/hooks/useSearch'
import { useEffect } from 'react'
import { UtilityButtons } from './UtilityButtons'
import { LocationSearchModal } from './LocationSearchModal'

export const MobileHeaderContent: React.FC = () => {
  const { filters } = useSearchStore()
  const { onSearch } = useSearch()

  useEffect(() => {
    onSearch()
  }, [filters])

  return (
    <>
      <div className="px-2 flex items-center mb-1.5">
        <Link href="/" className="flex items-center mr-2">
          <Image
            src="/logo-lystio.svg"
            alt="Lystio"
            width={51}
            height={24}
            priority
          />
        </Link>
        <div className="flex-1 mr-3">
          <LocationSearchModal />
        </div>
        <button>
          <MenuIcon />
        </button>
      </div>
      <UtilityButtons />
    </>
  )
}
