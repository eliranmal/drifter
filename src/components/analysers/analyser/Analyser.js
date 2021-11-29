import {useState, useEffect} from 'react'

import './Analyser.css'


const Analyser = ({className = '', colors = {}, analyser}) => {
  const [muted, setMuted] = useState(false)
  const [values, setValues] = useState([])

  const {
    active: activeColor = 'var(--accent-color-complement)',
    muted: mutedColor = 'var(--accent-color)',
  } = colors

  useEffect(() => {
    if (analyser && analyser.type === 'waveform') {
      const tick = () => {
        setValues(Array.from(analyser.getValue()))
        window.requestAnimationFrame(tick)
      }
      window.requestAnimationFrame(tick)
    }
  }, [analyser])

  useEffect(() => {
    if (analyser) {
      // todo - figure out how to also mute the audio signal
      analyser.input.gain.value = muted ? 0 : 1
    }
  }, [analyser, muted])


  /* todo - avoid the onClick; delegate control of the muted state to the extrenal component, */
  /*        so it's possible to compose a dedicated button for that purpose */
  return (
    <div
      className={`drifter-analyser ${className}`}
      onClick={() => setMuted(!muted)}
    >
      {values.map((value, index, arr) => (<span
        key={index}
        style={{
          width: `${100 / arr.length}%`,
          // for a 'waveform' type analyser, the value will be in the range [-1, 1]
          height: `calc((var(--visualization-box-height) * .5) + ${value * 50}%)`,
          borderStyle: 'solid',
          borderWidth: '.1rem 0 0',
          borderColor: muted ? mutedColor : activeColor,
        }}
        ></span>)
      )}
    </div>
  )
}


export default Analyser
