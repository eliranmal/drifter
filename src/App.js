import ReactTooltip from 'react-tooltip'

import Layout from './pages/layout/Layout'
import MainView from './pages/main-view/MainView'
import Settings from './pages/settings/Settings'

import './App.css';


const App = () => (
  <>
    <ReactTooltip
      effect="solid"
      type="dark"
      delayShow="300"
      delayHide="300"
      multiline
    />
    <Layout
      main={MainView}
      sideBar={Settings}
    />
  </>
)


export default App;
