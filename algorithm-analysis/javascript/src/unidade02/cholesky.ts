import { Matrix } from './matrix'

export function cholesky(matrix: Matrix): { L: Matrix; LT: Matrix } {
  const n = matrix.length
  const L = Array.from({ length: n }, () => Array(n).fill(0))
  const LT = Array.from({ length: n }, () => Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = 0
      // soma as diagonais
      if (i === j) {
        for (let k = 0; k < j; k++) {
          sum += L[j][k] ** 2
        }
        L[j][j] = Math.sqrt(matrix[j][j] - sum)
      } else {
        // avaliando L(i, j) usando L(j, j)
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k]
        }
        L[i][j] = (matrix[i][j] - sum) / L[j][j]
      }
      // atribuindo valores à matriz transposta
      LT[j][i] = L[i][j]
    }
  }
  return { L, LT }
}
