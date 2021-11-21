
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

export const range = size => [...(new Array(size)).keys()]

export const head = (defaultValue, arr = []) => arr[0] ?? defaultValue

export const matrixHead = head.bind(ø, [])

export const matrixRotate = matrix => range(matrixHead(matrix).length)
    .map(colIndex => matrix
        .map((row, rowIndex) => row[colIndex]))

export const matrixInsertValue = (matrix, row, col, value) => matrix.map(
  (rowValue, rowIndex) => rowIndex === row ? rowValue.map(
    (colValue, colIndex) => colIndex === col ? value : colValue
  ) : rowValue
)
