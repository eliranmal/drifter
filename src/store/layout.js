import persistedStore from './decorators/persisted-store'
import {analysersLayout} from '../components/analysers/Analysers'


const layoutStore = persistedStore('layout', {
  isMenuOpen: false,
  analysersLayout: analysersLayout.flow,
})


export default layoutStore
