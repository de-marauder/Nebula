'use client'

import Image from "next/image"
import image1 from '@/images/image-1-lg.jpg';
import { PiPlayPauseFill } from "react-icons/pi";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

export const NowPlaying = ( )=> {
  return (
    <>
      <div id="now-playing" className="h-[300px] pt-4">
        <h1>Now Playing</h1>
        <hr />
        <div>
          <div id="now-playing-img-wrapper" className="w-full h-[200px] relative">
            <Image src={image1} className='w-full h-full' alt='now-playing-image' />
            <div className='absolute inset-0 bg-slate-900/30 grid place-items-center'>
              <p className='text-2xl font-bold'>Music Name</p>
            </div>
          </div>
          <div id="now-playing-controls">
            <div id="seek" className="h-[7px] bg-white mt-4 flex items-center">
              <div id="seek-progress" className="relative flex items-center w-[100px] h-[3px] bg-slate-900/90">
                <div id="seek-spot" className="absolute right-0 rounded-3xl w-[10px] h-[10px] bg-slate-100"></div>
              </div>
            </div>
            <div id="controls" className="mt-2 flex items-center justify-between gap-2">
              <div id="prev-track" className='grid place-items-center text-slate-900 h-[25px] w-[25px] rounded-3xl bg-white'><TbPlayerSkipBackFilled /></div>
              <div id='jump-back' className='grid place-items-center text-slate-900 h-[30px] w-[30px] rounded-3xl bg-white'><TbPlayerTrackPrevFilled /></div>
              <div id='play' className='grid place-items-center text-slate-900 h-[50px] w-[50px] rounded-3xl bg-white'><PiPlayPauseFill /></div>
              <div id='jump-forward' className='grid place-items-center text-slate-900 h-[30px] w-[30px] rounded-3xl bg-white'><TbPlayerTrackNextFilled /></div>
              <div id='next-track' className='grid place-items-center text-slate-900 h-[25px] w-[25px] rounded-3xl bg-white'><TbPlayerSkipForwardFilled /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}