import { useContext } from "react";
import { Web5Provider } from "@/app/_components/Context/Providers/Providers";

export const Feed = () => {
  const { web5 } = useContext(Web5Provider)
  return (
    <>
      <h1>Your Feed</h1>
      <hr />
    </>
  )
}