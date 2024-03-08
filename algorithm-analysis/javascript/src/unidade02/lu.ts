import { TLU, TMatrix } from './types'

export function LU(matrix: TMatrix): TLU {
  const n = matrix.length
  const L = new Array(n).fill(null).map(() => new Array(n).fill(0))
  const U = new Array(n).fill(null).map(() => new Array(n).fill(0))

  // Perform LU decomposition
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < i) {
        let sum = 0
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * U[k][j]
        }
        L[i][j] = (matrix[i][j] - sum) / U[j][j]
      } else if (j === i) {
        L[i][j] = 1
        U[i][j] = matrix[i][j]
      } else {
        let sum = 0
        for (let k = 0; k < i; k++) {
          sum += L[j][k] * U[k][i]
        }
        U[i][j] = matrix[i][j] - sum
      }
    }
  }

  return { L, U }
}

// Example usage
// const matrix = [
//   [8, -6, 2],
//   [3, 7, -4],
//   [1, 5, 3],
// ]
// const { L, U } = LU(matrix)

// console.log('Lower Triangular Matrix L:')
// console.table(L)
// console.log('Upper Triangular Matrix U:')
// console.table(U)
