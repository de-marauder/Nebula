import { useContext } from "react";
import { Web5Provider } from "@/app/_components/Context/Providers/Providers";

export const Feed = () => {
  const { web5 } = useContext(Web5Provider)
  return (
    <div id='main-content' className="text-slate-900 sm:p-4 w-full h-full overflow-y-scroll bg-slate-100 rounded-xl">
      <h1>Your Feed</h1>
      <hr />
    </div>
  )
}