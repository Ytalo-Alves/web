import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const roboto = Roboto({subsets: ['latin'], variable: '--font-roboto'})
const baiJamjuree = BaiJamJuree({subsets: ['latin'], weight: '700', variable: '--font-baiJamjuree'})

export const metadata: Metadata = {
  title: 'Spacetime',
  description: 'Um capsula do tempo feita com React, Next.JS, Tailwind e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
