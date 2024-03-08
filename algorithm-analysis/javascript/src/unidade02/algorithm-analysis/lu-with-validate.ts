import { TMatrix } from './types'

export function LUWithValidate(matrix: TMatrix): {
  L: TMatrix
  U: TMatrix
  errors: string[]
} {
  const errors: string[] = []
  const n = matrix.length
  const L = new Array(n).fill(null).map(() => new Array(n).fill(0))
  const U = new Array(n).fill(null).map(() => new Array(n).fill(0))

  // Verificar se o determinante é zero
  let determinant = 1

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

    determinant *= U[i][i]

    // Verificar se o determinante é zero
    if (Math.abs(determinant) < 1e-10) {
      errors.push('[ValidationError]: Determinante é zero.')
      return { L: [], U: [], errors }
    }
  }

  return { L, U, errors }
}
