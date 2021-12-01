import {observable, autorun} from 'mobx'

import {load, save} from '../lib/storage'
import {resolveModuleBasename} from '../lib/util'


const persistancePropFilter = excludes => excludes ? (key, value) => (
  excludes.includes(key) ? void 0 : value
) : void 0

const persistedStore = (storeModule, storeTarget, unpersistedProps) => {
  const key = `drifter-${resolveModuleBasename(storeModule)}`
  const target = load(key) ?? storeTarget
  const store = observable(target)
  autorun(
    reaction => save(key, store, persistancePropFilter(unpersistedProps))
  )
  return store
}


export default persistedStore
