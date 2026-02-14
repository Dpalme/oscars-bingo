import axios from 'axios'

export async function fetcher<R extends object, T extends object, K extends object>(
  url: string,
  data: T = {} as T,
  headers: K = {} as K,
) {
  return (
    await axios.get(url, {
      data: data,
      headers: headers,
    })
  ).data as R
}
