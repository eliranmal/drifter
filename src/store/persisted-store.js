import {observable, autorun} from 'mobx'

import {load, save} from '../lib/storage'
import {resolveModuleBasename} from '../lib/util'


const persistedStore = (storeModule, storeTarget) => {
  const key = `drifter-${resolveModuleBasename(storeModule)}`
  const target = load(key) ?? storeTarget
  const store = observable(target)
  autorun(reaction => save(key, store))
  return store
}


export default persistedStore
