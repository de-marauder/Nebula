'use client'
import randomatic from 'randomatic'
import { Web5 } from '@web5/api';
import { FormEvent, MouseEvent, useContext, useEffect, useState } from "react"
import { DidProvider, Web5Provider } from "../Context/Providers/Providers"
import { useRouter } from 'next/navigation'

export const Login = () => {
  const [enterExistingDID, setEnterExistingDID] = useState(false);
  const { updateWeb5 } = useContext(Web5Provider);
  const { DID, updateDID } = useContext(DidProvider);
  const router = useRouter();

  useEffect(() => {
    const did = localStorage.getItem('user-DID');
    updateDID(did);
  });

  console.log('DID => ', DID);
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

  const connect = async () => {
    const web5ConnectOptions = {
      // agent: identityAgent,
      connectedDid: DID as string,
      sync: '5s'
    }
    const { web5: web5Instance, did: userDid } = await Web5.connect(web5ConnectOptions);
    localStorage.setItem('user-DID', userDid)
    updateDID(userDid);
    updateWeb5(web5Instance)
      router.push('/dashboard')
  }
  return (
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
          <button
            className="p-2 font-bold text-2xl w-full rounded-3xl bg-slate-900 text-white"
            onClick={() => { connect() }} type="submit">
            Connect
          </button>
        </div>
      </div>
    </section>
  )
}