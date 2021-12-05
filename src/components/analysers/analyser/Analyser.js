import {useState, useEffect} from 'react'

import './Analyser.css'


const Analyser = ({className = '', colors = {}, type, values = []}) => {
  const [muted, setMuted] = useState(false)

  const {
    active: activeColor = 'var(--accent-color-complement)',
    muted: mutedColor = 'var(--accent-color)',
  } = colors

  // todo - represent muted state in the store, and pass it as prop
  // useEffect(() => {
  //   if (analyser) {
  //     // todo - figure out how to also mute the audio signal
  //     analyser.input.gain.value = muted ? 0 : 1
  //   }
  // }, [analyser, muted])


  /* todo - avoid the onClick; delegate control of the muted state to the extrenal component, */
  /*        so it's possible to compose a dedicated button for that purpose */
  return (
    <div
      className={`drifter-analyser ${type ? `drifter-analyser-type-${type}` : ''} ${className}`}
      style={{
        '--analyser-color': muted ? mutedColor : activeColor,
      }}
      onClick={() => setMuted(!muted)}
    >
      {values.map((value, index, arr) => (
        <span
          key={index}
          className="drifter-analyser-bar"
          style={{
            '--analyser-bar-amplitude': value,
          }}
        ></span>
      ))}
    </div>
  )
}


export default Analyser
