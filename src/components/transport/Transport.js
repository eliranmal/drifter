import TransportButton, {transportButtonName} from '../transport-button/TransportButton'

import './Transport.css'


const Transport = ({
  isPlaying,
  isRecording,
  onPlay,
  onStop,
  onRecord}) => (
  <div className="Transport">
    <TransportButton
      name={transportButtonName.play}
      onClick={onPlay}
      isActive={isPlaying} />
    <TransportButton
      name={transportButtonName.stop}
      onClick={onStop} />
    <TransportButton
      name={transportButtonName.record}
      onClick={onRecord}
      isActive={isRecording} />
  </div>
)


export default Transport
