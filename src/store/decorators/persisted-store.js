import {toJS, autorun, observable} from 'mobx'

import {load, save} from '../../lib/storage'
import {exclusiveReplacer, resolveModuleBasename} from '../../lib/util'

// this implementation uses observable() as it excludes (computed) getters from
// the JS representation (unilke using makeAutoObservable(), or extendObservable()
// - which uses makeAutoObservable() under the hood), while allowing these getters
// to be used internally, which is what we want here.
const rehydrateStore = (storeTarget, savedStore) => (
  observable(Object.assign(storeTarget, savedStore ?? {}))
)

const persistedStore = (storeModule, storeTarget, unpersistedProps) => {
  const key = `drifter-${resolveModuleBasename(storeModule)}`
  const store = rehydrateStore(storeTarget, load(key))
  autorun(
    reaction => (
      save(key, toJS(store), exclusiveReplacer(unpersistedProps))
    )
  )
  return store
}


export default persistedStore
