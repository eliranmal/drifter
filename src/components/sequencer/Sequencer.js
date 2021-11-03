import './Sequencer.css'


const Sequencer = ({className}) => (
  <div class={`Sequencer ${className}`}>
  {/*
    <div class="Sequencer-gutter Sequencer-controls">
      <div class="channel"></div>
      <div class="channel"></div>
      <div class="channel"></div>
      <div class="channel"></div>
    </div>
    */}
    <div class="Sequencer-timeline">
      <div class="Sequencer-tape"></div>
      <div class="Sequencer-dots"></div>
      <div class="Sequencer-channels">
        <div class="channel"></div>
        <div class="channel"></div>
        <div class="channel"></div>
        <div class="channel"></div>
      </div>
    </div>
  </div>
)


export default Sequencer
