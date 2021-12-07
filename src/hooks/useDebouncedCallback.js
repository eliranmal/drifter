import debounce from 'lodash.debounce'
import {useEffect, useCallback} from 'react'


const useDebouncedCallback = (listener, wait = 100) => {
  const debouncedListener = debounce(listener, wait)
  const debouncedCallback = useCallback(
    e => debouncedListener(e),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    return () => debouncedListener.cancel()
  }, [debouncedListener])

  return [debouncedCallback, debouncedListener]
}


export default useDebouncedCallback
