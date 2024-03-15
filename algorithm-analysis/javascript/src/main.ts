import { solveLowerTriangular, solveUpperTriangular } from './unidade02/solve'
import { gauss } from './unidade02/matrix'
import { doolittleLU } from './unidade02/do-little'

function main(): void {
  // const matrix: TMatrix = [
  //   [3.0, 2.0, -4.0, 3.0, 7, 4, 4, 5, 4, 8],
  //   [2.0, 3.0, 3.0, 15.0, 6, 6, 5, 1, 4, 7],
  //   [5.0, -3, 1.0, 14.0, 8, 4, 8, 0, 1, 6],
  //   [5.0, -3, 1.0, 14.0, 6, 7, 7, 6, 7, 2],
  //   [5.0, -3, 1.0, 14.0, 6, 3, 4, 5, 7, 9],
  //   [5.0, -3, 1.0, 14.0, 6, 7, 7, 6, 2, 6],
  //   [5.0, -3, 1.0, 14.0, 6, 3, 1, 3, 3, 4],
  //   [5.0, -3, 1.0, 14.0, 6, 7, 7, 6, 4, 7],
  //   [5.0, -3, 1.0, 14.0, 6, 3, 1, 3, 3, 5],
  // ]
  const matrix = [
    [4, 2, 1],
    [3, 1, 3],
    [2, 3, 1],
  ]
  const s = gauss(matrix)
  const solve = solveUpperTriangular(s, [2080, 2080, 2080])
  console.log(solve)
}

main()
