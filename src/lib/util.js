
export const range = size => [...(new Array(size)).keys()]

export const rotateMatrix = matrix => range(matrix[0] && matrix[0].length)
    .map(colIndex => matrix
        .map((row, rowIndex) => row[colIndex]))
