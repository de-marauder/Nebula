import Link from "next/link"
import { SideNavItem } from "./NavItems"

export const SideBar = () => {
  const links = [
    'Feed',
    'Playlists',
    'Settings'
  ]
  return (
    <>
      <div id='side-bar' className="w-[250px] h-full flex flex-col pt-24 justify-between">
        <nav className="text-xl flex flex-col gap-2">
          {links.map((link, id) => {
            return <SideNavItem key={id} item={link} />
          })}
        </nav>
        <div className="pb-8 w-fit">
          <div className="mx-auto w-[50px] h-[50px] mb-2 rounded-3xl bg-white"></div>
          <center>username</center>
        </div>
      </div>
    </>
  )
}