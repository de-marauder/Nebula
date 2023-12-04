'use client'

import { FormEvent, MouseEvent, useContext } from "react"
import { DidProvider } from "../Context/Providers/Providers"

export const Login = () => {
  const { DID, updateDID } = useContext(DidProvider)
  updateDID('')
  const loginHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(DID)
    // updateDID(did)
    // auth DID
    // localStorage.setItem('user-DID', did)
  }
  console.log(DID)
  return (
    <>
      <h1>Login</h1>
      <div>
        <form>
          <label htmlFor="did">DID: </label>
          <input name='did' type="text" value={DID} onChange={(e) => updateDID(e.target.value)} />
          <button onClick={(e) => loginHandler(e)} type="submit">Enter</button>
        </form>
      </div>
    </>
  )
}