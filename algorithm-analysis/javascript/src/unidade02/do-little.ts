import { TLU, TMatrix } from './types'

export function doolittleLU(matrix: TMatrix): TLU {
  const n = matrix.length
  const L = new Array(n).fill(null).map(() => new Array(n).fill(0))
  const U = new Array(n).fill(null).map(() => new Array(n).fill(0))
  // Espaço O(n²)
  // Perform Doolittle's method
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j <= i; j++) {
      // O(n²)
      if (j === 0) {
        U[i][j] = matrix[i][j]
      } else {
        let sum = 0
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * U[k][j]
        }
        U[i][j] = matrix[i][j] - sum
      }
      if (i === j) {
        for (let k = j; k < n; k++) {
          // O(n³)
          let sum = 0
          for (let l = 0; l < j; l++) {
            sum += L[k][l] * U[l][j]
          }
          L[k][j] = (matrix[k][j] - sum) / U[j][j]
        }
      }
    }
  }
  return { L, U }
}
