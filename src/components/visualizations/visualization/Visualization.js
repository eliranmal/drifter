import {useState, useEffect} from 'react'
import {withBoxWrapper} from '../../../hoc/box-wrapper/BoxWrapper'

import './Visualization.css'


const Visualization = ({className = '', analyser}) => {
  const [muted, setMuted] = useState(false)
  const [values, setValues] = useState([])

  useEffect(() => {
    const tick = () => {
      if (analyser && analyser.type === 'waveform') {
        setValues(Array.from(analyser.getValue()))
        window.requestAnimationFrame(tick)
      }
    }
    window.requestAnimationFrame(tick)
  }, [analyser])

  useEffect(() => {
    if (analyser) {
      analyser.input.gain.value = muted ? 0 : 1
    }
  }, [analyser, muted])


  return (
    <div className={`drifter-visualization ${className}`} onClick={() => setMuted(!muted)}>
      {values.map((value, index, arr) => (<span
        key={index}
        style={{
          width: `${100 / arr.length}%`,
          // for a 'waveform' type analyser, the value will be in the range [-1, 1]
          height: `calc((var(--visualization-box-size) * .5) + ${value * 50}%)`,
          backgroundColor: muted ? 'var(--accent-color)' : 'var(--accent-color-complement)',
        }}
        ></span>)
      )}
    </div>
  )
}


export default withBoxWrapper(Visualization, {
  useWrapper: false,
})
