'use client'

import { ReactNode, useContext } from "react"
import { TopNav } from "../Nav/TopNav"
import { RightAside } from "../RightAside"
import { Hero } from "../Utils/HeroBg/Hero"
import { SideBar } from "../Nav/SideNav"
import { DidProvider } from "../Context/Providers/Providers"

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { DID } = useContext(DidProvider)
  return (
    <main id='main-tag' className="">
      <Hero />
      <section id='dashboard-layout' className='p-4 pt-2 pb-20 w-full h-screen overflow-hidden'>
        <TopNav />
        <section id='dashboard-layout-grid' className="flex h-full pt-4">
          <SideBar />
          {children}
          {DID ? <RightAside /> : null}
        </section>
      </section>
    </main>
  )
}