import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism.js'

import './TransportButton.css'


const transportButtonName = {
  play: 'play',
  stop: 'stop',
  record: 'record',
}

const TransportButton = ({name, isActive, ...props}) => <button
  {...props}
  className={[
    'Transport-button',
    name in transportButtonName ? `Transport-button-${transportButtonName[name]}` : '',
    isActive ? 'Transport-button-active' : '',
    props.className,
  ].filter(Boolean).join(' ')}></button>


export {transportButtonName}

export default withNeumorphism(TransportButton)
