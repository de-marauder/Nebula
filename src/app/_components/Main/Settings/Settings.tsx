'use client'
import { useContext, useState } from "react"
import { DidProvider } from "../../Context/Providers/Providers"

export const Settings = () => {
  const { DID } = useContext(DidProvider);
  const username = 'username'
  const o = [
    {
      name: 'username', type: 'text', value: username, disabled: false,
    },
    {
      name: 'did', type: 'text', value: DID, disabled: true,
    }
  ];
  const updateUsername =()=>{
    console.log('updating username...')
  }

  return (
    <>
      <section className="grid place-items-center h-full">
        <div className="mx-auto w-full">
          {o.map(({ name, type, value, disabled }, id) => {
            return <Input key={id}
              name={name}
              type={type}
              value={value as string}
              disabled={disabled}
            />
          })}
          <button onClick={updateUsername} className='my-4 block mx-auto p-2 px-4 text-2xl bg-slate-900 text-white rounded-2xl'>update</button>
        </div>
      </section>
    </>
  )
}
type InputProps = {
  name: string; type: string; value: string; disabled?: boolean;
}
const Input: React.FC<InputProps> = ({ name, type, value, disabled }) => {
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
        }} className={`${disabled ? 'p-2 absolute top-0 hover:cursor-pointer rounded w-full h-full bg-slate-900/80 text-white text-lg text-center content-[" "]' : 'hidden'}`}>Click to copy DID</div>
      </div>
    </div>
  )
}