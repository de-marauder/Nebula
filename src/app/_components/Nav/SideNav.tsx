'use client'

export const SideBar = () => {
  return (
    <>
      <div id='side-bar' className="w-[360px] h-full flex flex-col pt-24 justify-between">
        <nav className="text-xl flex flex-col gap-2">
          <div className="rounded-3xl p-4 mr-4 cursor-default hover:text-slate-900/90 hover:bg-slate-100/90">Nav-Item</div>
          <div className="rounded-3xl p-4 mr-4 cursor-default hover:text-slate-900/90 hover:bg-slate-100/90">Nav-Item</div>
          <div className="rounded-3xl p-4 mr-4 cursor-default hover:text-slate-900/90 hover:bg-slate-100/90">Nav-Item</div>
        </nav>
        <div className="pb-8 w-fit">
          <div className="mx-auto w-[50px] h-[50px] mb-2 rounded-3xl bg-white"></div>
          <center>username</center>
        </div>
      </div>
    </>
  )
}