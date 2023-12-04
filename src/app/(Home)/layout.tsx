import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { AuthGuard } from '@/app/_components/Auth/AuthGuard'
import { Hero } from '@/app/_components/Utils/HeroBg/Hero'
import { TopNav } from '@/app/_components/Nav/TopNav'
import { SideBar } from '@/app/_components/Nav/SideNav'
import { Faves } from '@/app/_components/RightAside/FaveArtists/Faves'
import { ReactNode } from 'react'
import { RightAside } from '@/app/_components/RightAside'
import { MainLayout } from '@/app/_components/Layout/main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
