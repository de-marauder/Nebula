'use client'
import { useEffect, ReactNode, useState, useContext } from "react";
import { Loader } from "../Utils/Loader/Loading";
import { usePathname, useRouter } from "next/navigation";
import { DidProvider } from "../Context/Providers/Providers";

export const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [did, setDid] = useState('did')
  const { DID: did, updateDID } = useContext(DidProvider)
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    const checkForUser = () => {
      const userDID = localStorage.getItem('user-DID');
      if (!userDID && (pathname !== '/' && pathname !== '/login')) {
        return router.push('/login')
      }
      if (userDID) {
        updateDID(userDID);
      }
      // else if (pathname !== '/' && pathname !== '/login') {
      //   // setDid(userDID);
      //   router.push('/dashboard')
      // }
    }
    checkForUser();
  }, [pathname, router, updateDID]);

  return (
    <>
      {did ? children : <Loader />}
    </>
  )
}