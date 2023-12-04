import Image from "next/image"
import heroImg from '@/images/image-1-lg.jpg'
import { ReactNode } from "react"


export const Hero: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-[-1] bg-red-500">
      <Image src={heroImg} alt='hero-bg' className="absolute w-full h-full" />
      <div className="absolute inset-0 bg-gray-900/70"></div>
      {children ? <div className="relative grid place-items-center w-screen h-screen">
        <div>
          {children}
        </div>
      </div> : null}
    </div>
  )
}