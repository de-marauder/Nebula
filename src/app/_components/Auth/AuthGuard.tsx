'use client'
import { useEffect, ReactNode, useState } from "react";
import { Loader } from "../Utils/Loader/Loading";
import { useRouter } from "next/navigation";
import { DidProvider } from "../Context/Providers/Providers";

export const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [did, setDid] = useState('did')
  const router = useRouter()
  useEffect(() => {
    const checkForUser = () => {
      const userDID = localStorage.getItem('user-DID');
      if (!userDID) {
        router.push('/login')
      } else {
        setDid(userDID);
      }
    }
    checkForUser();
  }, []);

  return (
    <>
      <DidProvider.Provider value={{ DID: did, updateDID: setDid }}>
        {did ? children : <Loader />}
      </DidProvider.Provider>
    </>
  )
}