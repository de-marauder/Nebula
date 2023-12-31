'use client'

import { TopNavItem } from "./NavItems"

export const TopNav = () => {
  const links = [
    'About',
    'Help',
  ]
  return (
    <>
      <nav id="top-nav" className="flex justify-between align-center gap-2 p-4 bg-slate-900/90 rounded-xl">
        <h1 className="m-0 text-2xl">Nebula</h1>
        <div className="flex justify-end align-center gap-2">
          {links.map((link, id) => {
            return <TopNavItem key={id} item={link} />
          })}
          {/* <div className="rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90">About</div>
          <div className="rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90">Help</div>
          <div className="rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90">Dashboard</div> */}
        </div>
      </nav>
    </>
  )
}