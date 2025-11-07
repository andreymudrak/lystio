'use client'

import dynamic from 'next/dynamic'

const HeaderContent = dynamic(
  () => import('@/components/Layout/HeaderLayout/components/HeaderContent'),
  {
    ssr: false,
  }
)

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-[0px_5px_7.4px_0px_#0000000D] px-2 md:px-4 lg:px-12 md:shadow-none py-1.5 md:pt-[21px] md:pb-6">
      <HeaderContent />
    </header>
  )
}
