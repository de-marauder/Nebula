import { Faves } from "./FaveArtists/Faves"
import { NowPlaying } from "./NowPlaying/NowPlaying"

export const RightAside = () => {
  return (
    <aside id="aside-bar" className="w-[400px] h-full max-sm:hidden sm:p-2">
      <Faves />
      <NowPlaying/>
    </aside>
  )
}