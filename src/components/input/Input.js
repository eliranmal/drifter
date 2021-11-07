import './Input.css'


const Input = ({ type = 'text', className, ...props}) => (
  <input
    {...props}
    type={type}
    className={`drifter-input ${className ?? ''}`}
    />
)


export default Input
