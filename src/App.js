import useLocalStorage from 'use-local-storage'
import ReactTooltip from 'react-tooltip'

import Layout from './pages/layout/Layout'
import Settings from './pages/settings/Settings'
import MainView from './pages/main-view/MainView'
import AppErrorBoundary from './components/error-boundary/AppErrorBoundary'

import './App.css';
import './styles/react-tooltip.css'


const App = () => {
  const [bpm, setBpm] = useLocalStorage('drifter-setting-bpm', 99)
  const [resetInterval, setResetInterval] = useLocalStorage('drifter-setting-reset-interval-beats', {
    value: 4,
    unit: 'bars',
  })

  return (
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
      <AppErrorBoundary>
        <Layout
          main={MainView}
          mainProps={{
            bpm,
            resetInterval,
          }}
          sideBar={Settings}
          sideBarProps={{
            bpm,
            setBpm,
            resetInterval,
            setResetInterval,
          }}
        />
        </AppErrorBoundary>
    </>
  )
}


export default App;
