import axios from "axios";

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

// export default defaultExport