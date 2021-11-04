
import Sequencer from '../../components/sequencer/Sequencer'
import Transport from '../../components/transport/Transport'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'


const MainView = () => (
  <div className="MainView">
    <h1 className="MainView-title">d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rifter</h1>
    <Sequencer className="MainView-panel" />
    <Transport className="MainView-panel-center" />
    <Visualizations className="MainView-panel-end" />
  </div>
)


export default MainView
