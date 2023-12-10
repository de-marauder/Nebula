import Image from "next/image"
// import image1 from '@/static/images/image-1-lg.jpg';
import image1 from "@/static/images/image-1-lg.jpg";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Track } from "./Controls";

type TDisplayTrackProps = {
  currentTrack: Track,
  audioRef: MutableRefObject<HTMLAudioElement | null>,
  setDuration: Dispatch<SetStateAction<number>>,
  progressBarRef: MutableRefObject<HTMLInputElement | null>,
  handleNext: () => void,
}
export const DisplayTrack: React.FC<TDisplayTrackProps> = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (!seconds) {
      throw new Error('Error setting audio duration')
    }
    setDuration(seconds);
    if (progressBarRef.current) {
      progressBarRef.current.max = seconds.toString();
    }
  };
  return (
    <div id="audio-player-img-wrapper" className="w-full h-[200px] relative">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <Image width={200} height={200} src={image1} className='w-full h-full' alt='audio-player-image' />
      <div className='absolute inset-0 bg-slate-900/30 grid place-items-center'>
        <p className='text-2xl font-bold'>Music Name</p>
      </div>
    </div>
  )
}