'use client'
import { useEffect, ReactNode, useContext } from "react";
import { Loader } from "../Utils/Loader/Loading";
import { usePathname, useRouter } from "next/navigation";
import { DidProvider, Web5Provider } from "../Context/Providers/Providers";
import { useErrorLoader } from "@/app/_hooks/useErrorLoader";
import { Modal } from "../Utils/Modal/Modal";
import { Button } from "../Utils/Button/Button";
import { Backdrop } from "../Utils/Backdrop/Backdrop";

export const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {

  const { error, loading, setError, setLoading } = useErrorLoader({
    error: '',
    loading: true
  })
  const { DID: did, updateDID } = useContext(DidProvider)
  // const { web5 } = useContext(Web5Provider)
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    const checkForUser = () => {
      console.log('1', loading)
      const userDID = localStorage.getItem('user-DID');
      if (!userDID && (pathname !== '/' && pathname !== '/login')) {
        // router.push('/login')
        return setLoading(false)
      }
      // if (!web5) {
      //   setLoading(false)
      //   return router.push('/login')
      // }
      console.log('2', loading)
      if (userDID) {
        updateDID(userDID);
        console.log('3', loading)
        // setLoading(false)
        // return
      }
      console.log('4', loading)
      setLoading(false)
    }
    checkForUser();
  }, []);
  // }, [pathname, router, updateDID, web5, setLoading]);
  console.log('re-rendering...')
  return (
    <>
      {/* {error && <Modal action={() => { setError('') }}>{error}</Modal>} */}
      {loading
        ? <Backdrop><Loader /></Backdrop>
        : !did
          ? (
            <Modal button={<Button action={() => { router.push('/login') }}>Login</Button>}>
              DID not found
            </Modal>
          )
          : children
      }
    </>
  )
}
