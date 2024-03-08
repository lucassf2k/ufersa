import { TMatrix } from '../types'

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
