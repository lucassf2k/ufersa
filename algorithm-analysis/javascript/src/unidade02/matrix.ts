import { TMatrix } from './types'

export type Matrix = number[][]

export function crout(A: Matrix): { L: Matrix; U: Matrix } {
  const size = A.length
  const L = Array.from({ length: size }, () => Array(size).fill(0))
  const U = Array.from({ length: size }, () => Array(size).fill(0))
  for (let k = 0; k < size; k++) {
    U[k][k] = 1
    for (let j = k; j < size; j++) {
      const sum0 = L[k]
        .slice(0, k - 1)
        .reduce((sum, _, s) => sum + L[k][s] * U[s][j], 0)
      L[k][j] = A[k][j] - sum0
    }
    for (let j = k; j < size; j++) {
      const sum1 = L[k]
        .slice(0, k - 1)
        .reduce((sum, _, s) => sum + L[k][s] * U[s][j], 0)
      U[k][j] = (A[k][j] - sum1) / L[k][k]
    }
  }
  console.log('L =', '\n', L, '\n', 'U =', '\n', U)
  return { L, U }
}

export function gauss(matrix: Matrix): Matrix {
  const lineNumbers = matrix.length
  const columnNumbers = matrix[0].length
  // Fase de Eliminação
  for (let line = 0; line < lineNumbers; line++) {
    // Escolha do maior pivô em môdulo
    let pivoMaximun = Math.abs(matrix[line][line])
    let lineMaximun = line
    for (let k = 0; k < lineNumbers; k++) {
      if (Math.abs(matrix[k][line])) {
        pivoMaximun = Math.abs(matrix[k][line])
        lineMaximun = k
      }
    }
    // Trocar a linha atual pela linha com o maior pivô
    for (let column = line; column < columnNumbers; column++) {
      const tmp = matrix[lineMaximun][column]
      matrix[lineMaximun][column] = matrix[line][column]
      matrix[line][column] = tmp
    }
    // Zera os elementos abaixo do pivô
    for (let l = line + 1; l < lineNumbers; l++) {
      const fator = matrix[l][line] / matrix[line][line]
      for (let k = line; k < columnNumbers; k++) {
        matrix[l][k] -= fator * matrix[line][k]
      }
    }
  }
  return matrix
}

export function gaussWithValidate(matrix: TMatrix): {
  matrix: TMatrix
  error: string
} {
  const lineNumbers = matrix.length
  const columnNumbers = matrix[0].length
  // Verificar se o determinante é zero
  let determinant = 1
  // Fase de Eliminação
  for (let line = 0; line < lineNumbers; line++) {
    // Escolha do maior pivô em môdulo
    let pivoMaximun = Math.abs(matrix[line][line])
    let lineMaximun = line

    for (let k = 0; k < lineNumbers; k++) {
      if (Math.abs(matrix[k][line]) > pivoMaximun) {
        pivoMaximun = Math.abs(matrix[k][line])
        lineMaximun = k
      }
    }
    // Trocar a linha atual pela linha com o maior pivô
    for (let column = line; column < columnNumbers; column++) {
      const tmp = matrix[lineMaximun][column]
      matrix[lineMaximun][column] = matrix[line][column]
      matrix[line][column] = tmp
    }
    // Zera os elementos abaixo do pivô
    for (let l = line + 1; l < lineNumbers; l++) {
      const fator = matrix[l][line] / matrix[line][line]
      for (let k = line; k < columnNumbers; k++) {
        matrix[l][k] -= fator * matrix[line][k]
      }
    }
    determinant *= pivoMaximun
    // Verificar se o determinante é zero
    if (Math.abs(determinant) < 1e-10) {
      return { matrix: [], error: '[Error]: Determinante é zero.' }
    }
  }

  return { matrix, error: '' }
}

export function LUDoLittle(matrix: Matrix, size: number): void {
  const lower = new Array(size).fill(0).map(() => new Array(size).fill(0))
  const upper = new Array(size).fill(0).map(() => new Array(size).fill(0))
  for (let i = 0; i < size; i++) {
    for (let k = 0; k < size; k++) {
      let sum = 0
      for (let j = 0; j < i; j++) sum += lower[i][j] * upper[j][k]
      upper[i][k] = matrix[i][k] - sum
    }
    for (let k = 0; k < size; k++) {
      if (i === k) {
        lower[i][i] = 1
      } else {
        let sum = 0
        for (let j = 0; j < i; i++) sum += lower[k][j] * upper[j][i]
        lower[k][i] = (matrix[k][i] - sum) / upper[i][i]
      }
    }
  }
  LUDisplay(lower, upper, size)
}

export function LUDisplay(
  lower: number[][],
  upper: number[][],
  size: number
): void {
  console.log('Triângular Inferio\tTriângular Superior')
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) console.log(`${lower[i][j]}\t`)
    console.log()
    for (let j = 0; j < size; j++) console.log(`${upper[i][j]}\t`)
    console.log()
  }
}

class QuadraticMatrix {
  static crount(matrix: Matrix): { L: Matrix; U: Matrix } {
    const size = matrix.length
    const L = QuadraticMatrix.identityMatrix(size)
    const U = Array.from(Array(size), () => Array(size).fill(0))
    for (let j = 0; j < size; j++) {
      for (let i = j; i < size; i++) {
        let sum = 0
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * U[k][j]
        }
        U[i][j] = matrix[i][j] - sum
      }
      for (let i = j; i < size; i++) {
        let sum = 0
        for (let k = 0; k < j; k++) {
          sum += L[j][k] * U[k][i]
        }
        L[i][j] = (matrix[i][j] - sum) / U[j][j]
      }
    }
    return { L, U }
  }

  // Função para resolver um sistema linear Ax = b usando a decomposição LU
  static solveLinearSystem(L: Matrix, U: Matrix, b: number[]) {
    const size = L.length
    const y = Array(size).fill(0)
    const x = Array(size).fill(0)

    // Forward substitution (Ly = b)
    for (let i = 0; i < size; i++) {
      let sum = 0
      for (let j = 0; j < i; j++) {
        sum += L[i][j] * y[j]
      }
      y[i] = b[i] - sum
    }

    // Backward substitution (Ux = y)
    for (let i = size - 1; i >= 0; i--) {
      let sum = 0
      for (let j = i + 1; j < size; j++) {
        sum += U[i][j] * x[j]
      }
      x[i] = (y[i] - sum) / U[i][i]
    }

    return x
  }

  private static identityMatrix(size: number): Matrix {
    const output: Matrix = []
    for (let i = 0; i < size; i++) {
      const row: number[] = []
      for (let j = 0; j < size; j++) {
        row.push(i === j ? 1 : 0)
      }
      output.push(row)
    }
    return output
  }
}
