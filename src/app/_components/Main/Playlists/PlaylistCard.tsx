import Image from "next/image"
import { FaPlus } from "react-icons/fa6";
import img from '@/static/images/image-1-lg.jpg'
export const PlaylistCard: React.FC<{ create?: boolean }> = ({ create }) => {

  return (
    <>
      {!create
        ? <DefaultCard />
        : <CreatePlaylistCard />
      }</>
  )
}
const DefaultCard = () => (
  <div className="relative rounded overflow-hidden h-[200px] rounded shadow mb-2">
    {/* playlist name */}
    <div className="absolute inset-0 w-full h-full">
      <Image className='w-full h-full' src={img} alt={'image'} width={200} height={200} />
      <div className='absolute inset-0 w-full h-full bg-slate-900/50'></div>
    </div>
    <div className="relative p-2 z-2 text-white font-bold">
      <p>Playlist name</p>
    </div>
  </div>
)
const CreatePlaylistCard = () => {
  return (
    <>
      <div className='border-dashed border-2 border-slate-900 hover:cursor-pointer hover:text-3xl grid place-items-center relative rounded overflow-hidden h-[200px] rounded shadow mb-2'>
        <div className='grid place-items-center p-4'>
          <FaPlus />
          <p>Create</p>
        </div>
      </div>
    </>
  )
}