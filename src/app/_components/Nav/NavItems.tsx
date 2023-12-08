'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideNavItem: React.FC<{ item: string }> = ({ item }) => {
  const pathname = usePathname();
  const i = item === 'Feed' ? '' : item.toLocaleLowerCase();

  const isActive = i ? pathname === `/dashboard/${i}` : pathname === '/dashboard'
  const classes = 'text-white rounded-3xl p-4 mr-4 cursor-default hover:text-slate-900/90 hover:bg-slate-100/90'
  const activeClass = 'rounded-3xl p-4 mr-4 cursor-default text-slate-900/90 bg-slate-100/90'
  return (
    <>
      <Link href={`/dashboard/${i}`} className="no-underline">
        <div className={isActive ? activeClass : classes}>
          {item}
        </div>
      </Link>
    </>
  )
}
export const TopNavItem: React.FC<{ item: string }> = ({ item }) => {
  const pathname = usePathname();

  return (
    <>
      <Link href={`/${item === 'Home' ? '' : item.toLocaleLowerCase()}`}  className="no-underline">
        <div className={`text-white rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90 ${pathname === `/${item.toLocaleLowerCase()}` ? 'text-slate-900/90 bg-slate-100/90' : ''}`}>
        {item}
      </div>
      </Link>
    </>
  )
}