'use client'
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className='grid place-items-center h-full'>
        <button className='text-3xl font-bold p-8 py-2 shadow-white rounded-3xl' onClick={() => { router.push('/login') }}>Click to start</button>
      </div>
    </>
  )
}
