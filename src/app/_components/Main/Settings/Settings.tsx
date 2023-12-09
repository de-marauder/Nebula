'use client'
import { Dispatch, SetStateAction, useContext, useState } from "react"
import { DidProvider } from "../../Context/Providers/Providers"
import { Button } from "../../Utils/Button/Button";
import { API } from "@/app/_config/API";
import { TUser } from "../Feed/Feed";
import { useErrorLoader } from "@/app/_hooks/useErrorLoader";
import { Loader } from "../../Utils/Loader/Loading";
import { Modal } from "../../Utils/Modal/Modal";

export const Settings = () => {
  const { DID } = useContext(DidProvider);
  const { error, setError, loading, setLoading } = useErrorLoader({});
  const [username, setUsername] = useState('username')
  const o = [
    {
      name: 'username', type: 'text', value: username, disabled: false,
    },
    {
      name: 'did', type: 'text', value: DID, disabled: true,
    }
  ];
  const updateUsername = async () => {
    console.log('updating username...')
    const payload = {
      username: username,
      did: DID as string
    }
    const { data, error } = await API.patch<TUser>('/api/users', payload)
    if (error) { setError(error) }
    if (data) { setUsername(data.data.username) }
  }

  return (
    <>
      {error && (
        <Modal button={<Button action={() => setError('')}>Close</Button>}>
          {error}
        </Modal>
      )}
      <section className="grid place-items-center h-full">
        <div className="mx-auto w-full">
          {o.map(({ name, type, value, disabled }, id) => {
            return <Input key={id}
              name={name}
              type={type}
              value={value as string}
              disabled={disabled}
              onChange={setUsername}
            />
          })}
          <Button action={updateUsername} >
            {
              loading
                ? <Loader />
                : 'Update'
            }
          </Button>
        </div>
      </section>
    </>
  )
}
type InputProps = {
  name: string; type: string; value: string; disabled?: boolean; onChange: Dispatch<SetStateAction<string>>
}
const Input: React.FC<InputProps> = ({ name, type, value, disabled, onChange }) => {
  const [showCopied, setShowCopied] = useState(false)
  return (
    <div className="relative flex mb-2 text-2xl w-full w-max-[800px]" id={name}>
      <label className="mr-2 w-fit" htmlFor={name}>{name.toLocaleUpperCase()}: </label>
      {showCopied
        ? (
          <p className='z-10 w-fit absolute right-0 text-sm rounded bg-slate-900 text-white p-2'>
            copied
          </p>
        )
        : null
      }
      <div className={`w-full relative`}>
        <input className={`p-2 rounded w-full`}
          onChange={(e) => {
            if (name === 'username' && onChange) {
              onChange(e.target.value)
            }
          }}
          name={name} type={type} value={value} aria-disabled={!!disabled} />
        <div onClick={(e) => {
          e.preventDefault()
          if (name === 'did') {
            console.log('copying...')
            navigator.clipboard.writeText(value as string);
            setShowCopied(true)
            setTimeout(() => {
              setShowCopied(false)
            }, 2000)
          }
        }} className={`${disabled ? 'p-2 absolute top-0 hover:cursor-pointer rounded w-full h-full bg-slate-900/80 text-white text-lg text-center' : 'hidden'}`}>Click to copy DID</div>
      </div>
    </div>
  )
}