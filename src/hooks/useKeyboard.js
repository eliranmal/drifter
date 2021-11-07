import {useEffect} from 'react'


const useKeyboard = (listener = () => {}) => {
  useEffect(() => {
    // keydown is best for capturing backspace and such
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  })
}


export default useKeyboard
