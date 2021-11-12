
const ø = Object.create(null)


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
