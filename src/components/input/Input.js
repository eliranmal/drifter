import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './Input.css'


const Input = ({ type = 'text', ...props}) => (
  <input
    {...props}
    type={type}
    className={`Input ${props.className ?? ''}`}
    />
)


export default Input
