import ReactTooltip from 'react-tooltip'

import Layout from './pages/layout/Layout'
import MainView from './pages/main-view/MainView'
import Settings from './pages/settings/Settings'

import './App.css';
import './styles/react-tooltip.css'


const App = () => (
  <>
    <ReactTooltip
      className="drifter-react-tooltip"
      effect="solid"
      delayShow={300}
      delayHide={300}
      textColor="var(--background-color)"
      backgroundColor="var(--accent-color-complement)"
      multiline
    />
    <Layout
      main={MainView}
      sideBar={Settings}
    />
  </>
)


export default App;
