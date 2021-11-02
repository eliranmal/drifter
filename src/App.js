import Layout from './pages/layout/Layout'
import MainView from './pages/main-view/MainView'
import Settings from './pages/settings/Settings'

import './App.css';


const App = () => (
  <div className="App">
    <Layout
      main={MainView}
      sideBar={Settings}
    />
  </div>
)


export default App;
