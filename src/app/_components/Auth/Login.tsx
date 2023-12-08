'use client'
// import randomatic from 'randomatic'
// import { Web5 } from '@web5/api';
import { useContext, useEffect, useState } from "react"
import { DidProvider, Web5Provider } from "../Context/Providers/Providers"
import { useRouter } from 'next/navigation'

var Web5: any = null
export const Login = () => {
  const [enterExistingDID, setEnterExistingDID] = useState(false);
  const { updateWeb5 } = useContext(Web5Provider);
  const { DID, updateDID } = useContext(DidProvider);
  const router = useRouter();

  useEffect(() => {
    const did = localStorage.getItem('user-DID');
    updateDID(did);
  });
  useEffect(() => {
    const initWeb5 = async () => {
      // @ts-ignore
      Web5 = await import("@web5/api/browser");
      // try {
      //   const { web5, did } = await Web5.connect({ sync: "5s" });

      //   setWeb5(web5);
      //   setMyDid(did);

      //   if (web5 && did) {
      //     console.log("Web5 initialized");
      //   }
      // } catch (error) {
      //   console.error("Error initializing Web5:", error);
      // }
    };

    initWeb5();
  }, []);

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
    try {
      const { web5: web5Instance, did: userDid } = await Web5.connect(web5ConnectOptions);
      localStorage.setItem('user-DID', userDid)
      updateDID(userDid);
      updateWeb5(web5Instance)
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
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