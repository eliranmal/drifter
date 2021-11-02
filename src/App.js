import Layout from './pages/layout/Layout'
import MainView from './pages/main-view/MainView'
import Settings from './pages/settings/Settings'

import './App.css';


const App = () => (
  <Layout
    main={MainView}
    sideBar={Settings}
  />
)


export default App;
