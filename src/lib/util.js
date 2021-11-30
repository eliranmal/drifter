
const ø = Object.create(null)


const calculatePrimes = (iterations, multiplier) => {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}


/**
* performs a heavy calculation, effectively blocking the thread
*
* @param {number} intensity a number from 0 to 1 indicating the computation intensity
*/
export const blockThread = intensity => calculatePrimes(intensity * 50, intensity * 1000000000)

/**
* @param {number} n any integer or float number, but not Infinity, -Infinity, 0 or -0
*
* @returns {number} 1 for positive values, -1 for negative
*/
export const polarity = n => n / Math.abs(n)

export const limit = (min, max, value) => Math.max(min, Math.min(max, value))

export const range = size => [...(new Array(size)).keys()]

export const head = (defaultValue, arr = []) => arr[0] ?? defaultValue

export const matrixHead = head.bind(ø, [])

export const matrixRotate = matrix => range(matrixHead(matrix).length).map(
  colIndex => matrix.map(
    (row, rowIndex) => row[colIndex]
  )
)

export const matrixInsertValue = (matrix, row, col, value) => matrix.map(
  (rowValue, rowIndex) => rowIndex === row ? rowValue.map(
    (colValue, colIndex) => colIndex === col ? value : colValue
  ) : rowValue
)

export const percentageScale = (min, max) => n => (
  (((max - min) / 100) * n) + min
)

export const proximityDistribution = (centerValue, segmentCount, maxValue = 100) => (
  range(segmentCount).map(
    (n, i, arr) => {
      const limit = (maxValue / (arr.length - 1)) * i
      return maxValue - Math.abs(limit - centerValue)
    }
  )
)

export const asLogarithmic = () => {
  // todo - implement
}

export const marshall = JSON.stringify

export const unmarshall = data => {
  if (!data) {
    return
  }
  let unmarshalledData
  try {
    unmarshalledData = JSON.parse(data)
  } catch (e) {}
  return unmarshalledData
}


const basenameRegex = /[^/\\]*(?=[.][a-zA-Z]+$)/

export const resolveModuleBasename = module => {
  const matches = basenameRegex.exec(module.id)
  if (matches && matches.length) {
    return matches[0]
  }
}
