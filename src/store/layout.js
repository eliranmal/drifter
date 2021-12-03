import persistedStore from './decorators/persisted-store'


const layoutStore = persistedStore(module, {
  isMenuOpen: false,
})


export default layoutStore
