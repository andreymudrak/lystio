import { Plus_Jakarta_Sans } from 'next/font/google'

import { Header } from '@/components/Layout/HeaderLayout/Header'

import '../styles/tailwind.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Lystio Property Search',
  description: 'Find your perfect property for rent or buy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        id="body"
        className={`${plusJakartaSans.className} bg-gray-50 min-h-screen relative flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex">{children}</main>
      </body>
    </html>
  )
}
