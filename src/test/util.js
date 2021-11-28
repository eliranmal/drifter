
export const stringify = (strings, ...expressions) => strings.map(
  (string, index) => `${string}${JSON.stringify(expressions[index]) ?? ''}`
).join('')

export const isPrimitive = value =>
  typeof value === 'number' ||
  typeof value === 'boolean' ||
  typeof value === 'string'
