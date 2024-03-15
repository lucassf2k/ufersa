/**
 *
 * @param {Number[][]} A
 * @param {Number} b
 * @param {Number} x0
 * @param {Number} tol
 * @param {Number} maxIter
 * @returns
 */

function gaussJacobi(A, b, x0, tol = 1e-6, maxIter = 1000) {
  const n = b.length
  let x = [...x0]
  let xNew = new Array(n).fill(0)

  for (let k = 0; k < maxIter; k++) {
    for (let i = 0; i < n; i++) {
      const sigma =
        A[i].slice(0, i).reduce((acc, value, idx) => acc + value * x[idx], 0) +
        A[i]
          .slice(i + 1)
          .reduce((acc, value, idx) => acc + value * x[idx + i + 1], 0)
      xNew[i] = (b[i] - sigma) / A[i][i]
    }

    if (Math.max(...xNew.map((value, idx) => Math.abs(value - x[idx]))) < tol) {
      return { solution: xNew, iterations: k + 1 }
    }

    x = [...xNew]
  }

  throw new Error(
    'O método de Gauss-Jacobi não convergiu dentro do número máximo de iterações.'
  )
}

// Exemplo de uso:
const A = [
  [4, -1, 0, 0],
  [-1, 4, -1, 0],
  [0, -1, 4, -1],
  [0, 0, -1, 3],
]

const b = [15, 10, 10, 10]
const x0 = Array(b.length).fill(0)

const { solution, iterations } = gaussJacobi(A, b, x0)

console.log('Solução aproximada:', solution)
console.log('Número de iterações:', iterations)
