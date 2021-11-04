import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism.js'

import './TransportButton.css'


const TransportButton = ({name, ...props}) => <button
  {...props}
  className={`Transport-button ${
    name ? 'Transport-button-' + name : ''
  } ${props.className}`}></button>


export default withNeumorphism(TransportButton)
