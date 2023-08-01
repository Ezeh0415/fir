import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [ispending, setispending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

      const abortcont = new AbortController()


        setTimeout(() => {
          fetch(url,  { signal:abortcont.signal })
            .then(res => {
              if (!res.ok) {
                   throw Error('poor network check your network and try again')
              }
            return res.json()
            })
            .then(data => {
            setData(data);
            setispending(false);
            setError(null);
            })
            .catch(err => {
              if (err.name === 'AbortError') {
                console.log('fetch abort')
              }else {
                setispending(false);
                setError(err.message);
              }
            })
        }, 500)

        return () => abortcont.abort();

      }, [url]);

      return {data, ispending, error};
}

export default useFetch;