'use client'

import Image from "next/image"
import image1 from '@/images/image-1-lg.jpg';

export const NowPlaying = ( )=> {
  return (
    <>
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
    </>
  )
}