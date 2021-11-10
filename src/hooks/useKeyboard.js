import {useEffect} from 'react'


/**
* a functional switch statement for command-style funneling of keyboard events.
*
* @param {Array<Array>} mappings - a list of tupples in the form:
*   [
*     [ {Number} keyCode, {Array<String>} modifiers, {Function} listener ]
*   ]
* modifiers is optional
*
* @returns {Function} an event listener that is routed and ready to be attached
*/
const mapKeyboardEvents = mappings => e => {
  const mapping = mappings.find(([keyCode, modifiers]) =>
    keyCode === e.keyCode && (
      !modifiers || modifiers.length === 0 ||
      modifiers.every(modifier => e[modifier])
    ))
  if (mapping) {
    e.preventDefault()
    const listener = mapping[mapping.length - 1]
    listener()
  }
}

const useKeyboard = (listener = () => {}) => {
  useEffect(() => {
    // keydown is best for capturing backspace and such
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  })
}


export {mapKeyboardEvents}

export default useKeyboard
