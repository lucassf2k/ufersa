import { choleskyWithValidate } from './unidade02/algorithm-analysis/cholesky-with-validate'
import { LUWithValidate } from './unidade02/algorithm-analysis/lu-with-validate'
import {
  MATRIX_10_X_10,
  MATRIX_50_x_50,
  MATRIZ_30_X_30,
} from './unidade02/algorithm-analysis/data-matriz'
import { gauss, gaussWithValidate } from './unidade02/matrix'
import { solveLowerTriangular, solveUpperTriangular } from './unidade02/solve'

function main(): void {
  console.time()
  const { L, errors } = choleskyWithValidate(MATRIZ_30_X_30)
  if (errors.length > 0) {
    console.log(errors)
    return
  }
  console.log(L)
  // const solve = solveLowerTriangular(
  //   matrix,
  //   [
  //     72, 32, 65, 88, 55, 9, 51, 78, 30, 14, 64, 100, 72, 57, 97, 81, 83, 80,
  //     35, 58, 8, 38, 70, 13, 35, 37, 1, 7, 89, 23, 74, 68, 72, 1, 55, 22, 22,
  //     21, 44, 5, 33, 30, 5, 21, 77, 47, 22, 94, 43, 61,
  //   ]
  // )
  // const solve2 = solveLowerTriangular(L, solve)
  console.timeEnd()
  // console.log(solve)
}

main()
