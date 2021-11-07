import {useEffect, useCallback} from 'react'


const useKeyboard = (listener = () => {}, dependencies) => {
  const memoisedListener = useCallback(listener, dependencies)
  useEffect(() => {
    // keydown is best for capturing backspace and such
    document.addEventListener('keydown', memoisedListener)
    return () => {
      document.removeEventListener('keydown', memoisedListener)
    }
  })
}


export default useKeyboard
