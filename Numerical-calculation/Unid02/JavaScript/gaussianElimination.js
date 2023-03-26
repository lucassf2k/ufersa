function eliminacaoGauss(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;
  const solucao = new Array(linhas);

  // Fase de eliminação
  for (let i = 0; i < linhas; i++) {
    // Escolhe o maior pivô em módulo
    let maxPivo = Math.abs(matriz[i][i]);
    let maxLinha = i;
    for (let j = i + 1; j < linhas; j++) {
      if (Math.abs(matriz[j][i]) > maxPivo) {
        maxPivo = Math.abs(matriz[j][i]);
        maxLinha = j;
      }
    }

    // Troca a linha atual pela linha com o maior pivô
    for (let k = i; k < colunas; k++) {
      const temp = matriz[maxLinha][k];
      matriz[maxLinha][k] = matriz[i][k];
      matriz[i][k] = temp;
    }

    // Zera os elementos abaixo do pivô
    for (let j = i + 1; j < linhas; j++) {
      const fator = matriz[j][i] / matriz[i][i];
      for (let k = i; k < colunas; k++) {
        matriz[j][k] -= fator * matriz[i][k];
      }
    }
  }

  // Fase de retrosubstituição
  for (let i = linhas - 1; i >= 0; i--) {
    let soma = 0;
    for (let j = i + 1; j < colunas - 1; j++) {
      soma += matriz[i][j] * solucao[j];
    }
    solucao[i] = (matriz[i][colunas - 1] - soma) / matriz[i][i];
  }

  return solucao;
}

/**
 * 2x + y - z = 8
 * -3x -y +2z = -11
 * -2x + y +2z = -3
 */
const matrix = [
  [2, 1, -1, 8],
  [-3, -1, 2, -11],
  [-2, 1, 2, -3],
];

const result = eliminacaoGauss(matrix);
const [x, y, z] = result;
console.log(`x = ${x}, y = ${y}, z = ${z}`);