import TransportButton from '../transport-button/TransportButton'

import './Transport.css'


const Transport = ({
  isPlaying,
  isRecording,
  onPlay,
  onStop,
  onRecord}) => (
    <div className="Transport">
      <TransportButton
        type="play"
        onClick={onPlay}
        isActive={isPlaying} />
      <TransportButton
        type="stop"
        onClick={onStop} />
      <TransportButton
        type="record"
        onClick={onRecord}
        isActive={isRecording} />
    </div>
  )


export default Transport
