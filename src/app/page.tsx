'use client'
import { useEffect, useState } from "react"
import { getRandomPhoto } from "./_config/API"
import image1 from '../images/image-1-lg.jpg';
import Image from "next/image";

export default function Home() {

  return (
    <main id='main-tag' className="">
      <div className="fixed inset-0 z-[-1] bg-red-500">
        <Image src={image1} alt='hero-bg' className="w-full h-full" />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      <section id='dashboard-layout' className='p-4 pt-2 pb-20 w-full h-screen overflow-hidden'>
        <nav id="top-nav" className="flex justify-between align-center gap-2 p-4 bg-slate-900/90 rounded-xl">
          <h1 className="m-0 text-2xl">Nebula</h1>
          <div className="flex justify-end align-center gap-2">
            <div className="rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90">Nav-Item</div>
            <div className="rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90">Nav-Item</div>
            <div className="rounded-xl cursor-default p-2 hover:text-slate-900/90 hover:bg-slate-100/90">Nav-Item</div>
          </div>
        </nav>
        <section id='dashboard-layout-grid' className="flex h-full pt-4">
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
          <div id='main-content' className="text-slate-900 sm:p-4 w-full h-full overflow-y-scroll bg-slate-100 rounded-xl">
            <h1>Your Feed</h1>
            <hr />
          </div>
          <aside id="aside-bar" className="w-[400px] h-full max-sm:hidden sm:p-2">
            <div className="h-[300px] mb-4 pb-4">
              <h1>Your Faves</h1>
              <hr />
              <div className="overflow-scroll h-full">
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
                <div className="p-2 mb-2 rounded-3xl text-slate-900 bg-slate-100">Some Artistes</div>
              </div>
            </div>
            <div id="now-playing" className="h-[300px]">
              <h1>Now Playing</h1>
              <hr />
              <div>
                <div id="now-playing-img-wrapper" className="w-full h-[200px] contain">
                  <Image src={image1} className='w-full h-full' alt='now-playing-image' />
                </div>
                <div id="now-playing-controls">
                  <div id="seek" className="h-[7px] bg-white mt-4 flex items-center">
                    <div id="seek-progress" className="relative flex items-center w-[100px] h-[3px] bg-slate-900/90">
                      <div id="seek-spot" className="absolute right-0 rounded-3xl w-[10px] h-[10px] bg-slate-100"></div>
                    </div>
                  </div>
                  <div id="controls" className="mt-2 flex items-center justify-between gap-2">
                    <div id="prev-track" className='h-[25px] w-[25px] rounded-3xl bg-white'></div>
                    <div id='jump-back' className='h-[30px] w-[30px] rounded-3xl bg-white'></div>
                    <div id='play' className='h-[50px] w-[50px] rounded-3xl bg-white'></div>
                    <div id='jump-forward' className='h-[30px] w-[30px] rounded-3xl bg-white'></div>
                    <div id='next-track' className='h-[25px] w-[25px] rounded-3xl bg-white'></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  )
}
