import { LU } from './unidade02/lu'
import { doolittleLU } from './unidade02/do-little'
import { Gauss } from './unidade02/gauss'
import { TMatrix } from './unidade02/types'
import { solveLowerTriangular, solveUpperTriangular } from './unidade02/solve'
import { cholesky } from './unidade02/cholesky'
import { choleskyWithValidate } from './unidade02/cholesky-with-validate'
import { LUWithValidate } from './unidade02/lu-with-validate'
import { gauss, gaussWithValidate } from './unidade02/matrix'

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
  const matrix: TMatrix = [
    [1, 2],
    [-1, 4],
  ]
  const { L, U, errors } = LUWithValidate(matrix)
  if (errors.length > 0) {
    errors.forEach((value) => console.log(value))
    return
  }
  console.log('Matrix L: ')
  console.table(L)
  console.log('Matrix U: ')
  console.table(U)
}

main()
