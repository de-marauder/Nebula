import { ReactNode } from "react"

export const Backdrop: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-100 grid place-items-center bg-slate-900/70">
      {children}
    </div>
  )
}