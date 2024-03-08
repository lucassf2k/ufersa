import { TMatrix } from './types'

export class Gauss {
  // private static readonly N: number = 3 // Número de incógnitas

  // Função para realizar a eliminação gaussiana e encontrar a solução
  static execute(mat: TMatrix, N: number): void {
    const flagSingular: number = this.eliminacaoDireta(mat, N)

    if (flagSingular !== -1) {
      console.log('Matriz Singular.')

      if (mat[flagSingular][N] !== 0) console.log('Sistema inconsistente.')
      else console.log('Pode ter infinitas soluções.')

      return
    }

    // this.substituicaoRegressiva(mat, N)
  }

  // Função para trocar duas linhas na matriz
  private static trocarLinhas(
    mat: number[][],
    i: number,
    j: number,
    N: number
  ): void {
    for (let k = 0; k <= N; k++) {
      const temp: number = mat[i][k]
      mat[i][k] = mat[j][k]
      mat[j][k] = temp
    }
  }

  // Função para imprimir o conteúdo da matriz
  private static imprimirMatriz(mat: number[][], N: number): void {
    for (let i = 0; i < N; i++, console.log()) {
      for (let j = 0; j <= N; j++) {
        process.stdout.write(mat[i][j] + '\t')
      }
      console.log()
    }
  }

  // Função para realizar a eliminação direta e retornar a flag singular
  private static eliminacaoDireta(mat: number[][], N: number): number {
    for (let k = 0; k < N; k++) {
      let iMax: number = k
      let vMax: number = mat[iMax][k]

      for (let i = k + 1; i < N; i++) {
        if (Math.abs(mat[i][k]) > vMax) {
          vMax = mat[i][k]
          iMax = i
        }
      }

      if (mat[k][iMax] === 0) return k

      if (iMax !== k) this.trocarLinhas(mat, k, iMax, N)

      for (let i = k + 1; i < N; i++) {
        const f: number = mat[i][k] / mat[k][k]

        for (let j = k + 1; j <= N; j++) mat[i][j] -= mat[k][j] * f

        mat[i][k] = 0
      }
    }

    return -1
  }

  // Função para realizar a substituição regressiva e imprimir a solução
  private static substituicaoRegressiva(mat: number[][], N: number): void {
    const x: number[] = new Array(N).fill(0)

    for (let i = N - 1; i >= 0; i--) {
      x[i] = mat[i][N]

      for (let j = i + 1; j < N; j++) {
        x[i] -= mat[i][j] * x[j]
      }

      x[i] = x[i] / mat[i][i]
      if (isNaN(x[i]) || isFinite(x[i]))
        throw new Error('Possívelmente determinante é ZERO')
    }

    console.log()
    console.log('Solução para o sistema:')
    for (let i = 0; i < N; i++) {
      console.log(x[i].toFixed(6))
    }
  }
}
