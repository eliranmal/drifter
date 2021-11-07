import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism.js'

import './TransportButton.css'


const tooltipByType = {
  play: 'play (space)',
  stop: 'stop (space)',
  record: 'record (R)',
}


const TransportButton = ({type, isActive, ...props}) => (
  <button
    {...props}
    className={[
      'Transport-button',
      type ? `Transport-button-${type}` : '',
      isActive ? 'Transport-button-active' : '',
      props.className,
    ].filter(Boolean).join(' ')}
    data-tip={tooltipByType[type]}
  ></button>
)


export default withNeumorphism(TransportButton)
