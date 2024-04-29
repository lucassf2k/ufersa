import { choleskyWithValidate } from './unidade02/algorithm-analysis/cholesky-with-validate'
import {
  MATRIX_10_X_10,
  MATRIZ_30_X_30,
} from './unidade02/algorithm-analysis/data-matriz'
import { LUWithValidate } from './unidade02/algorithm-analysis/lu-with-validate'
import { gaussWithValidate } from './unidade02/matrix'
import { solveLowerTriangular, solveUpperTriangular } from './unidade02/solve'

function main(): void {
  console.time()
  const { matrix } = gaussWithValidate([
    [0.55, 0.25, 0.25],
    [0.3, 0.45, 0.2],
    [0.15, 0.3, 0.55],
  ])
  const y = solveLowerTriangular(matrix, [4200, 4500, 5500])
  // const solve = solveUpperTriangular(U, y)
  console.log(y)
  console.timeEnd()
}

main()
