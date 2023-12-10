'use client'

import { ReactNode, useRef, useState } from "react";
import { tracks } from '@/static/data/tracks'
import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";

const AudioPlayerErrorHandler = (Component: () => ReactNode) => {
  const returnPlayerComponent = (content: ReactNode) => {
    return (
      <>
        <div id="audio-player" className="h-[300px] pt-4">
          <h1>Now Playing</h1>
          <hr />
          {content}
        </div>
      </>
    )
  }
  try {
    return (() => returnPlayerComponent(Component()))
  } catch (error) {
    return () => returnPlayerComponent(<p className="text-red-500">(error as Error).message</p>)
  }
}

export const AudioPlayer = AudioPlayerErrorHandler(() => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <div>
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
          }}
        />
        <Controls
          {...{
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
          }}
        />
      </div>
    </>
  )
})
