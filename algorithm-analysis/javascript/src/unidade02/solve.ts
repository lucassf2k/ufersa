import { createEmptyMatrix } from './create-empty-matrix'
import { Matrix } from './matrix'

export function solveLowerTriangular(L: Matrix, b: number[]): number[] {
  const y = createEmptyMatrix(L.length)
  // resolvendo Ly = b
  for (let i = 0; i < L.length; i++) {
    let sum = 0
    for (let j = 0; j < i; j++) {
      sum += L[i][j] * y[j]
    }
    y[i] = (b[i] - sum) / L[i][i]
  }
  return y
}

export function solveUpperTriangular(U: Matrix, b: number[]): number[] {
  const x = createEmptyMatrix(U.length)
  // resolvendo Ux = b
  for (let i = U.length - 1; i >= 0; i--) {
    let sum = 0
    for (let j = i + 1; j < U.length; j++) {
      sum += U[i][j] * x[j]
    }
    x[i] = (b[i] - sum) / U[i][i]
  }
  return x
}
