import { ReactNode } from "react"
import { Backdrop } from "../Backdrop/Backdrop"

export const Modal: React.FC<{ children: ReactNode; button?: ReactNode }> = ({ children, button }) => {
  return (
    <>
      <Backdrop>
        <div className='p-2 text-center text-xl bg-white shadow-2xl shadow-indigo-500/50 rounded-2xl text-black min-w-[300px] max-w-[500px]'>
          {children}
          <div>
            {button}
          </div>
        </div>
      </Backdrop>
    </>
  )
}