import { PiPlayPauseFill } from "react-icons/pi";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
import { Seek } from "./Seek";
import { StaticImageData } from "next/image";

export type Track = {
  title: string,
  src: string,
  author: string,
  thumbnail?: string,
}
type TControlsProps = {
  audioRef: MutableRefObject<HTMLAudioElement | null>,
  progressBarRef: MutableRefObject<HTMLInputElement | null>,
  duration: number,
  setTimeProgress: Dispatch<SetStateAction<number>>,
  tracks: Track[],
  trackIndex: number,
  setTrackIndex: Dispatch<SetStateAction<number>>,
  setCurrentTrack: Dispatch<SetStateAction<Track>>,
  handleNext: () => void,
  timeProgress: number
}
export const Controls: React.FC<TControlsProps> = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  timeProgress
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef<number | null>(null);

  const repeat = useCallback(() => {
    if (!audioRef.current) {
      throw new Error('Current track not found')
    }
    if (!progressBarRef.current) {
      throw new Error('Could not find progress bar')
    }
    if (!playAnimationRef.current) {
      throw new Error('Could not find animation player')
    }
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime.toString();
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(+progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (!audioRef.current) {
      throw new Error('Current track not found')
    }
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    if (!audioRef.current) {
      throw new Error('Current track not found')
    }
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    if (!audioRef.current) {
      throw new Error('Current track not found')
    }
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  return (
    <>
      <div id="audio-player-controls">
        <Seek 
          {...{ progressBarRef, audioRef, timeProgress, duration }}
         />
        <div id="controls" className="mt-2 flex items-center justify-between gap-2">
          <div id="prev-track" onClick={handlePrevious} className='grid place-items-center text-slate-900 h-[25px] w-[25px] rounded-3xl bg-white'><TbPlayerSkipBackFilled /></div>
          <div id='jump-back' onClick={skipBackward} className='grid place-items-center text-slate-900 h-[30px] w-[30px] rounded-3xl bg-white'><TbPlayerTrackPrevFilled /></div>
          <div id='play-pause' onClick={togglePlayPause} className='grid place-items-center text-slate-900 h-[50px] w-[50px] rounded-3xl bg-white'><PiPlayPauseFill /></div>
          <div id='jump-forward' onClick={skipForward} className='grid place-items-center text-slate-900 h-[30px] w-[30px] rounded-3xl bg-white'><TbPlayerTrackNextFilled /></div>
          <div id='next-track' onClick={handleNext} className='grid place-items-center text-slate-900 h-[25px] w-[25px] rounded-3xl bg-white'><TbPlayerSkipForwardFilled /></div>
        </div>
        <div className="volume">
          <button onClick={() => setMuteVolume((prev) => !prev)}>
            {muteVolume || volume < 5 ? (
              <IoMdVolumeOff />
            ) : volume < 40 ? (
              <IoMdVolumeLow />
            ) : (
              <IoMdVolumeHigh />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
            style={{
              background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
            }}
          />
        </div>
      </div>
    </>
  )
}