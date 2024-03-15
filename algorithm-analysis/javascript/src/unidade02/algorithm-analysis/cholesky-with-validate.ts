import { TMatrix } from '../types'

export function choleskyWithValidate(matrix: TMatrix): {
  L: TMatrix
  LT: TMatrix
  errors: string[]
} {
  const errors: string[] = []
  const n = matrix.length
  const L = Array.from({ length: n }, () => Array(n).fill(0))
  const LT = Array.from({ length: n }, () => Array(n).fill(0))
  // Verificar se a matriz é simétrica
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        errors.push('[Error]: Matrix não é simetrica')
        return { L: [], LT: [], errors }
      }
    }
  }
  // Executar a decomposição de Cholesky
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = 0
      // soma das diagonais
      if (i === j) {
        for (let k = 0; k < j; k++) {
          sum += L[j][k] ** 2
        }
        const diagonalValue = matrix[j][j] - sum
        if (diagonalValue < 0) {
          errors.push('[Error]: Matrix não é definida positiva.')
          return { L: [], LT: [], errors }
        }
        L[j][j] = Math.sqrt(diagonalValue)
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
  return { L, LT, errors }
}
