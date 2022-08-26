import { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const abort = new AbortController()

    setTimeout(() => {
      // stop the fetch 
      fetch(url, { signal: abort.signal })
        .then(res => {
          //res.ok is a property
          if (!res.ok) {
            //custom error message
            throw Error('Data not found or Connection problem')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 1000)

    return () => abort.abort()

  }, [url])

  return { data, isPending, error }
}

export default useFetch