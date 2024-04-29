function trapezoidalRule(f, a, b, n) {
  // Calcula a largura de cada intervalo
  let deltaX = (b - a) / n

  // Inicializa a soma dos valores de f(x) nos pontos finais dos intervalos
  let sum = f(a) + f(b)

  // Adiciona as contribuições dos pontos intermediários dos intervalos
  for (let i = 1; i < n; i++) {
    let x = a + i * deltaX
    sum += 2 * f(x)
  }

  // Multiplica pela largura do intervalo e divide por 2
  let integral = (deltaX / 2) * sum

  return integral
}

// Função de exemplo: f(x) = x^2
function f(x) {
  return x * x
}

// Limites de integração
let a = 0
let b = 2

// Número de intervalos
let n = 100

// Calcular a integral definida de f(x) usando a regra do trapézio
let integral = trapezoidalRule(f, a, b, n)
console.log('Integral aproximada:', integral)
