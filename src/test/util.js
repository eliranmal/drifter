
export const stringify = (strings, ...expressions) => strings.map(
  (string, index) => {
    const expression = expressions[index]
    let value = ''
    try {
      value = JSON.stringify(expression)
    } catch (e) {
      if (
        e instanceof TypeError && e.message.includes('Converting circular structure to JSON')
      ) { // it's probably a module
        if (expression.exports) {
          value = `module [${expression.id}]`
        }
      }
    }
    return `${string}${value ?? ''}`
  }
).join('')

export const isPrimitive = value =>
  typeof value === 'number' ||
  typeof value === 'boolean' ||
  typeof value === 'string'
