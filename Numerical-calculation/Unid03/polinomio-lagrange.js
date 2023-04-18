function polinomioLagrange(x, x_valores, y_valores) {
  /*
  Calcula o polinômio de Lagrange para um conjunto de pontos (x_valores, y_valores) no ponto x.
  */
  let n = x_valores.length;
  let soma = 0;
  for (let i = 0; i < n; i++) {
    let termo = y_valores[i];
    for (let j = 0; j < n; j++) {
      if (j != i) {
        termo *= (x - x_valores[j]) / (x_valores[i] - x_valores[j]);
      }
    }
    soma += termo;
  }
  return soma;
}