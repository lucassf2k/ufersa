import { choleskyWithValidate } from './unidade02/algorithm-analysis/cholesky-with-validate'
import {
  MATRIX_10_X_10,
  MATRIZ_30_X_30,
} from './unidade02/algorithm-analysis/data-matriz'
import { LUWithValidate } from './unidade02/algorithm-analysis/lu-with-validate'
import { solveLowerTriangular, solveUpperTriangular } from './unidade02/solve'

function main(): void {
  console.time()
  const { L, LT } = choleskyWithValidate(MATRIX_10_X_10)
  const y = solveLowerTriangular(
    L,
    [4.15, 0.19, 0.51, 0.18, 0.1, 0.43, 0.51, 0.26, 0.51, 0.45]
  )
  const solve = solveUpperTriangular(LT, y)
  console.timeEnd()
}

main()
