function bisseccao({ a, b, erro, iterator }) {
  const f = (x) => x
  let x = 0
  let countIteration = 0
  for (let i = 0; i < iterator; i++) {
    x = (a + b) / 2
    if (Math.abs(f(x)) < erro) {
      countIteration++
      return x
    }
    if (f(a) * f(x) < 0) {
      b = x
    } else {
      a = x
    }
    countIteration++
  }
  return { value: x, countIteration }
}

function falsaPosicao({ a, b, epsilon, iterator }) {
  const f = (x) => x * Math.log10(x) - 1
  const novoX = ({ a, b }) => (a * f(b) - b * f(a)) / (f(b) - f(a)) 
  let x = novoX({ a, b })
  let countIteration = 0
  for (let i = 1; i <= iterator; i++) {
    if (Math.abs(f(x)) <= epsilon) {
      countIteration++
      return x
    }
    if (f(a) * f(x) <= 0) {
      b = x
    } else {
      a = x
    }
    x = novoX({ a, b })
  }
  return { value: x, countIteration }
}

function pontoFixo({ a, b, erro }) {
  const f = (x) => (x * x) + x - 6
  const g = (x) => x * x * x - x * x + 2
  let x = x0
}

function newton({ x0, erro, iteracao }) {
  const f = (x) => x * x * x - x * x + 2
  const derivada = (x) => 3 * x * x + 2 * x
  let x = x0
  let quantidadeIteracao = 0
  for (let i = 0; i < iteracao; i++) {
    let x1 = x - f(x) / derivada(x)
    if (Math.abs(x1 - x) < erro) {
      return { value: x1, quantidadeIteracao }
    }
    x = x1
    quantidadeIteracao++
  }
  return { value: x, quantidadeIteracao }
}

function secante({ x0, x1, erro, iteracao }) {
  const f = (x) => x * x * x - x * x + 2
  let x2 = 0
  let quantidadeIteracao = 0
  for (let i = 0; i < iteracao; i++) {
    x2 = x1 - f(x) * (x1 - x0) / f(x1) - f(x0)
    quantidadeIteracao++
    if (Math.abs(x2) < erro) {
      return { value: x2, quantidadeIteracao }
    }
    x0 = x1
    x1 = x2
  }
  return { value: x2, quantidadeIteracao }
}