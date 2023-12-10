import { useContext, useEffect, useState } from "react";
import { Web5Provider } from "@/app/_components/Context/Providers/Providers";
import { API } from "@/app/_config/API";
import { useErrorLoader } from "@/app/_hooks/useErrorLoader";
import { Loader } from "../../Utils/Loader/Loading";

export type TUser = {
  username: string; did: string
}

export const Feed = () => {
  const { error, setError, loading, setLoading } = useErrorLoader({});
  const [data, setData] = useState<TUser[]>()
  useEffect(() => {
    {
      (async () => {
        const { data, error } = await API.get<TUser[]>('/api/users')
        if (error) { setError(error) }
        if (data) { setData(data.data) }
      })()
    }
  },[setError])
  return (
    <>
      <h1>Your Feed</h1>
      <hr />
      {
        loading
          ? <Loader />
          : data
            ? data.map((d, id) => {
              return <FeedItem key={id} username={d.username} did={d.did} />
            })
            : 'No Feed'
      }
    </>
  )
}

const FeedItem: React.FC<TUser> = ({ username, did }) => {
  return (
    <div>
      <p>{username}</p>
      <p>{did}</p>
    </div>
  )
}