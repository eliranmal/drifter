import {observable, autorun} from 'mobx'

import {load, save} from '../../lib/storage'
import {exclusiveReplacer, resolveModuleBasename} from '../../lib/util'


const persistedStore = (storeModule, storeTarget, unpersistedProps) => {
  const key = `drifter-${resolveModuleBasename(storeModule)}`
  const target = {
    ...load(key),
    ...storeTarget,
  }
  const store = observable(target)
  autorun(
    reaction => save(key, store, exclusiveReplacer(unpersistedProps))
  )
  return store
}


export default persistedStore
