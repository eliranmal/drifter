import './Sequencer.css'


const Sequencer = ({className}) => (
  <div className={`Sequencer ${className}`}>
  {/*
    <div className="Sequencer-gutter Sequencer-controls">
      <div className="channel"></div>
      <div className="channel"></div>
      <div className="channel"></div>
      <div className="channel"></div>
    </div>
    */}
    <div className="Sequencer-timeline">
      <div className="Sequencer-tape"></div>
      <div className="Sequencer-dots"></div>
      <div className="Sequencer-channels">
        <div className="channel"></div>
        <div className="channel"></div>
        <div className="channel"></div>
        <div className="channel"></div>
      </div>
    </div>
  </div>
)


export default Sequencer
