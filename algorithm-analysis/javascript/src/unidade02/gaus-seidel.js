function gaussSeidel(A, b, x0 = null, tol = 1e-6, maxIter = 1000) {
  const n = b.length
  x0 = x0 || Array(n).fill(0) // Se x0 não for fornecido, inicia com um vetor de zeros
  let x = [...x0]

  for (let k = 0; k < maxIter; k++) {
    const xOld = [...x]

    for (let i = 0; i < n; i++) {
      const sigma = A[i].reduce(
        (acc, value, j) => (j !== i ? acc + value * x[j] : acc),
        0
      )
      x[i] = (b[i] - sigma) / A[i][i]
    }

    // Critério de convergência
    if (x.every((value, i) => Math.abs(value - xOld[i]) < tol)) {
      return { solution: x, iterations: k + 1 } // Retorna a solução e o número de iterações
    }
  }

  throw new Error(
    'O método de Gauss-Seidel não convergiu após o número máximo de iterações.'
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

const { solution, iterations } = gaussSeidel(A, b)

console.log('Solução aproximada:', solution)
console.log('Número de iterações:', iterations)
