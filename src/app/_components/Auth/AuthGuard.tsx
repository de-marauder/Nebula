'use client'
import { useEffect, ReactNode, useState, useContext } from "react";
import { Loader } from "../Utils/Loader/Loading";
import { usePathname, useRouter } from "next/navigation";
import { DidProvider } from "../Context/Providers/Providers";

export const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [did, setDid] = useState('did')
  const { DID: did } = useContext(DidProvider)
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    const checkForUser = () => {
      const userDID = localStorage.getItem('user-DID');
      if (!userDID) {
        return router.push('/login')
      } else if (pathname !== '/' && pathname !== '/login') {
        // setDid(userDID);
        router.push('/dashboard')
      }
    }
    checkForUser();
  }, []);

  return (
    <>
      {/* <DidProvider.Provider value={{ DID: did, updateDID: setDid }}> */}
      {did ? children : <Loader />}
      {/* </DidProvider.Provider> */}
    </>
  )
}