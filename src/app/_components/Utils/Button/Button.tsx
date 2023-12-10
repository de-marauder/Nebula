import { ReactNode } from "react"

export const Button: React.FC<{ children: ReactNode; action: ()=>void }> = ({ children, action }) => {
  return (
    <button onClick={action} className="my-4 block mx-auto p-2 px-4 text-2xl bg-slate-900 text-white rounded-xl hover:shadow-xl hover:shadow-indigo-500 ">
      {children}
    </button>
  )
}