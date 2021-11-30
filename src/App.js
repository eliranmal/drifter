import ReactTooltip from 'react-tooltip'

import appSettings from './store/app-settings'
import Layout from './pages/layout/Layout'
import Settings from './pages/settings/Settings'
import MainView from './pages/main-view/MainView'
import AppErrorBoundary from './components/error-boundary/AppErrorBoundary'

import './App.css';
import './styles/react-tooltip.css'


const App = () => (
  <>
    <ReactTooltip
      className="drifter-react-tooltip"
      effect="solid"
      delayShow={500}
      delayHide={250}
      textColor="var(--background-color)"
      backgroundColor="var(--accent-color-complement)"
      multiline
    />
    <AppErrorBoundary>
      <Layout
        main={MainView}
        mainProps={{appSettings}}
        sideBar={Settings}
        sideBarProps={{appSettings}}
      />
      </AppErrorBoundary>
  </>
)


export default App;
