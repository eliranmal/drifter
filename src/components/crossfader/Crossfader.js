import './Crossfader.css'


const Crossfader = ({min = 0, max = 100, value = 50, ...props}) => (
  <input className="Crossfader" type="range"
    min={min} max={max} value={value}
    {...props} />
)


export default Crossfader
