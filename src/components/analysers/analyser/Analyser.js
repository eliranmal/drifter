import './Analyser.css'


const Analyser = ({
  className = '',
  color = 'var(--accent-color-complement)',
  values = [],
}) => (
  <div
    className={`drifter-analyser ${className}`}
    style={{
      '--analyser-color': color,
    }}
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


export default Analyser
