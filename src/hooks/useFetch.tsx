import axios from 'axios'

export const fetcher = async <T extends object, K extends object>(
  url: string,
  data: T = {} as T,
  headers: K = {} as K,
) => {
  return (
    await axios.get(url, {
      data: data,
      headers: headers,
    })
  ).data
}
