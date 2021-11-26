
export const stringify = (strings, ...expressions) => strings.map(
  (string, index) => `${string}${JSON.stringify(expressions[index]) ?? ''}`
).join('')
