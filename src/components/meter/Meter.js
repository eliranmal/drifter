import './Meter.css'


const Meter = ({
  min = 0, max = 100,
  low = 50, high = 80,
  optimum = 0,
  value = 30,
  className,
  ...props}) => (
  <meter className={`Meter ${className}`}
          min={min} max={max}
          low={low} high={high}
          optimum={optimum}
          value={value}
          {...props}></meter>
)


export default Meter
