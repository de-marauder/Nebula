'use client'
import { useContext, useEffect, useState } from "react"
import { DidProvider, Web5Provider } from "../Context/Providers/Providers"
import { useRouter } from 'next/navigation'
import { truncate } from "fs/promises"
import { Backdrop } from "../Utils/Backdrop/Backdrop"
import { Loader } from "../Utils/Loader/Loading"
import { Modal } from "../Utils/Modal/Modal"
import { Button } from "../Utils/Button/Button"
import { useErrorLoader } from "@/app/_hooks/useErrorLoader"
import { TUser } from "../Main/Feed/Feed"
import { API } from "@/app/_config/API"

export const Login = () => {
  const { error, loading, setError, setLoading } = useErrorLoader({})
  const [enterExistingDID, setEnterExistingDID] = useState(false);
  const { updateWeb5 } = useContext(Web5Provider);
  const { DID, updateDID } = useContext(DidProvider);
  const router = useRouter();

  useEffect(() => {
    const did = localStorage.getItem('user-DID');
    updateDID(did);
  });

  // const createNewDID = async () => {
  //   connect()
  //   router.push('/dashboard')
  // }
  // const registerExistingDID = async () => {
  //   if (enterExistingDID) {
  //    connect()
  //     router.push('/dashboard')
  //   } else {
  //     setEnterExistingDID(true)
  //   }
  // }
  // console.log('Web5 => ', Web5)
  // console.log('Web5Pkg => ', web5Pkg)
  const connect = async () => {
    const { Web5 } = await import("@web5/api/browser");
    console.log(Web5)
    const web5ConnectOptions = {
      // agent: identityAgent,
      connectedDid: DID as string,
      sync: '5s'
    }
    console.log('connecting...')
    try {

      setLoading(true)
      const { web5: web5Instance, did: userDid } = await Web5.connect(web5ConnectOptions);
      localStorage.setItem('user-DID', userDid)
      updateDID(userDid);
      updateWeb5(web5Instance)
      setLoading(false)
      router.push('/dashboard')
      saveUser({ username: 'anonymous', did: userDid })
        .then(({ data, error }) => {
          if (error) {
            return setError(error)
          }
          console.log('user saved...')
        })
        .catch((error) => {
          console.log('Error saving user')
        })
    } catch (error) {
      console.log(error)
      setError((error as Error).message || 'Error occured while connecting to web5')
    }
  }
  const saveUser = async (u: TUser) => {
    return await API.post('/api/users', u)
  }
  return (
    <>
      {loading && <Backdrop><Loader /></Backdrop>}
      {error && <Modal button={<Button action={() => setError('')}>Close</Button>}>{error}</Modal>}
      <section className='grid place-items-center h-full'>
        <div>
          <h1 className="sm:text-3xl text-center">Login</h1>
          <div className="w-max-500px">
            {/* <button
            className="p-2 mb-2 font-bold text-2xl w-full rounded-3xl bg-slate-900 text-white"
            onClick={registerExistingDID} type="submit">
            Connect Existing DID
          </button>
          <button
            className="p-2 font-bold text-2xl w-full rounded-3xl bg-slate-900 text-white"
            onClick={createNewDID} type="submit">
            Create New DID
          </button> */}
            {enterExistingDID && <input className="p-4 mb-4 rounded-3xl w-full" placeholder="Enter your DID" name='did' type="text" value={DID as string} onChange={(e) => updateDID(e.target.value)} />}
            {/* <button
              className="p-2 font-bold text-2xl w-full rounded-3xl bg-slate-900 text-white"
              onClick={() => { connect() }} type="submit">
              Connect
            </button> */}
            <Button action={connect} >
              Connect
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}