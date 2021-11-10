import useLocalStorage from 'use-local-storage'
import ReactTooltip from 'react-tooltip'

import Layout from './pages/layout/Layout'
import MainView from './pages/main-view/MainView'
import Settings from './pages/settings/Settings'

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
      <Layout
        main={MainView}
        sideBar={Settings}
        sideBarProps={{
          bpm,
          setBpm,
          resetInterval,
          setResetInterval,
        }}
      />
    </>
  )
}


export default App;
