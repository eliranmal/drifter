import './Meter.css'


const Meter = ({
  min = 0, max = 100,
  low = 50, high = 80,
  optimum = 0,
  value = 30,
  className,
  ...props}) => (
  <meter
    min={min} max={max}
    low={low} high={high}
    optimum={optimum}
    value={value}
    {...props}
    className={`drifter-meter ${className ?? ''}`}
    ></meter>
)


export default Meter
