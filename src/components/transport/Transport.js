import TransportButton from '../transport-button/TransportButton'

import './Transport.css'


const Transport = () => (
  <div className="Transport">
    <TransportButton name="play" />
    <TransportButton name="stop" />
    <TransportButton name="record" />
  </div>
)


export default Transport
