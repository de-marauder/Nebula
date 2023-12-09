import axios, { AxiosError } from "axios";

const unsplashAPIBaseURL = 'https://api.unsplash.com'
const getRandomPhotoURL = '/photos/random'
const getPhotosURL = '/photos/'


const unsplashAPIConfig = {
  headers: {
    Authorization: 'Client-ID ' + process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
  }
}
type RandomPhotoReqConfig = {
  search: string;
  count: number
}
export const getRandomPhoto = async ({ search, count }: RandomPhotoReqConfig) => {
  const { data } = await axios.get<{ urls: { full: string } }[]>(unsplashAPIBaseURL + getRandomPhotoURL + `?query=${search}&count=${count.toString()}`, unsplashAPIConfig)
  console.log('data => ', data)
  const idx = (Math.random() * (data.length - 1)).toFixed(0);
  console.log(idx)
  return data[+idx].urls.full;
}

// const defaultExport = {
//   getRandomPhoto
// }
type StrRecord = Record<string, string>;
type ApiResponse<TData = StrRecord> = { status: string; data: TData };

type API = {
  get: <T>(route: string) => Promise<{
    data: ApiResponse<T>, error: undefined
  } | {
    data: undefined, error: string
  }>;
  post: <T>(route: string, body: ApiResponse['data']) => Promise<{
    data: ApiResponse<T>, error: undefined
  } | {
    data: undefined, error: string
  }>;
  patch: <T>(route: string, body: ApiResponse['data']) => Promise<{
    data: ApiResponse<T>, error: undefined
  } | {
    data: undefined, error: string
  }>;
}

export const API: API = {
  get: async function <T>(route: string) {
    try {
      const { data } = await axios.get<ApiResponse<T>>(route);
      return { data }
    } catch (error) {
      console.debug(error)
      const e = error as Error | AxiosError
      let message = 'An error occured';
      if (error instanceof AxiosError) {
        message = error.response?.data.message;
      }
      return {
        error: message
      }
    }
  },
  post: async function <T>(route: string, body: ApiResponse['data']) {
    try {
      const { data } = await axios.post<ApiResponse<T>>(route, body);
      return { data }
    } catch (error) {
      console.debug(error)
      const e = error as Error | AxiosError
      let message = 'An error occured';
      if (error instanceof AxiosError) {
        message = error.response?.data.message;
      }
      return {
        error: message
      }
    }
  },
  patch: async function <T>(route: string, body: ApiResponse['data']) {
    try {
      const { data } = await axios.patch<ApiResponse<T>>(route, body);
      return { data }
    } catch (error) {
      console.debug(error)
      const e = error as Error | AxiosError
      let message = 'An error occured';
      if (error instanceof AxiosError) {
        message = error.response?.data.message;
      }
      return {
        error: message
      }
    }
  }
}