import './Input.css'


const Input = ({ type = 'text', value, onChange = () => {}, ...props}) => (
  <input
    {...props}
    type={type}
    value={value}
    onChange={typeof value !== 'undefined' && value !== null ? onChange : null}
    className={`Input ${props.className ?? ''}`}
    />
)


export default Input
