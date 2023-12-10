import { MutableRefObject } from "react";

type TSeekProps = {
  progressBarRef: MutableRefObject<HTMLInputElement|null>,
  audioRef: MutableRefObject<HTMLAudioElement | null>,
  timeProgress: number,
  duration: number,
}
export const Seek: React.FC<TSeekProps> = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}) => {
  const handleProgressChange = () => {
    if (!progressBarRef.current) {
      throw new Error('Could not find progress bar')
    }
    if (!audioRef.current) {
      throw new Error('Could not find audio')
    }
    audioRef.current.currentTime = +progressBarRef.current.value;
  };

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (
    <div id="seek" className="h-[7px] bg-white mt-4 flex items-center">
      <span className="time current">{formatTime(timeProgress)}</span>
      {/* <div id="seek-progress" className="relative flex items-center w-[100px] h-[3px] bg-slate-900/90">
        <div id="seek-spot" className="absolute right-0 rounded-3xl w-[10px] h-[10px] bg-slate-100"></div>
      </div> */}
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time">{formatTime(duration)}</span>
    </div>
  )
}