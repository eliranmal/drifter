import {marshall, unmarshall} from '../lib/util'


export const load = key => unmarshall(localStorage.getItem(key))

export const save = (key, data, replacer) => (
  localStorage.setItem(key, marshall(data, replacer))
)
