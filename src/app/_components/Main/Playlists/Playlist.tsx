import { PlaylistCard } from "./PlaylistCard"

export const Playlists = () => {
  const playlists = [0, 1, 2, 3, 4]
  return (
    <>
      <section className='container mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        {playlists.map((playlist, id) => {
          return <PlaylistCard key={id} />
        })}
        <PlaylistCard create={true} />
      </section>
    </>
  )
} 