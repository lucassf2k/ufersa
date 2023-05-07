export class Unid03Implementation {
  // O(N²)
  // Estratégia: permutar elementos vizinhos
  // Tática:
  // 1 - Percorrer a lista n-1 vezes
  // 2 - Trocar os elementos adjacentes que estiverem desordenados
  static bubbleSort(vet: Array<number>): void {
    let tmp;
    const size = vet.length;

    // LOOP EXTERNO
    for (let i = 0; i < size - 1; i++) {
      // LOOP INTERNO
      for (let j = 0; j < size - 1; j++) {
        // SWAP
        if (vet[j] > vet[j + 1]) {
          tmp = vet[j];
          vet[j] = vet[j + 1];
          vet[j + 1] = tmp;
        }
      }
    }
  }

  static bubbleSortOtimiz(vet: Array<number>): void {
    let tmp;
    const size = vet.length;
    let isDisorder = true;

    // LOOP EXTERNO
    for (let i = 0; i < size - 1 && isDisorder; i++) {
      isDisorder = false;

      // LOOP INTERNO
      for (let j = 0; j < size - 1; j++) {
        // SWAP
        if (vet[j] > vet[j + 1]) {
          tmp = vet[j];
          vet[j] = vet[j + 1];
          vet[j + 1] = tmp;
          isDisorder = true;
        }
      }
    }
  }

  // Todos os casos: O(N²)
  // Estratégia: selecionar elemento, por valor, e inserir na posição correta
  // Tática:
  // 1 - Selecionar o menor item do conjunto
  // 2 - Trocar ele com o item que está na posição i
  // 3 - Repita essas operações com os demais itens até que reste apenas um elemento
  static selectSort(vet: Array<number>): void {
    let minor, tmp;
    const size = vet.length;

    // LOOP EXTERNO: Varre todo o conjunto
    for (let i = 0; i < size - 1; i++) {
      minor = i;

      // Varre subsequencia em busca do menor numero
      for (let j = i + 1; j < minor; j++) {
        if (vet[j] < vet[minor]) {
          minor = j;
        }
      }

      // Se houver um numero menor. faz o swap
      if (i !== minor) {
        tmp = vet[i];
        vet[i] = vet[minor];
        vet[minor] = tmp;
      }
    }
  }

  // Melhor caso: O(N) quando a lista já está ordenada
  // Pior e Médio caso: O(N²) quando a lista está desordenada
  // Estratégia: selecionar elemento, por sua posição, e inserir na ordem
  // Tática:
  // 1 - Percorrer a lista da esquerda para a direita
  // 2 - Para cada elemento, comparar com os elementos que estão a sua esquerda
  // 3 - Inserir na posição em que ele se encaixa, conforme critério
  // 4 - Repetir este procedimento até chegar ao fim da lista
  static insertSort(vet: Array<number>): void {
    let j: number;
    let elected: number;
    const size = vet.length;

    // LOOP EXTERNO
    for (let i = 1; i < size; i++) {
      elected = vet[i];
      j = i - 1;

      while (j >= 0 && elected < vet[j]) {
        vet[j + 1] = vet[j];
        j--;
      }
      vet[j + 1] = elected;
    }
  }

  // Médio caso: O(N log N)
  // Pior caso: O(N²) quando o vetor está ordenado
  // Estratégia: Parte do princípio que ordenar N/2 elementos é mais rápido que ordenar N elemento
  // Tática:
  // 1 - Escolher um elemento da lista pivô
  // 2 - Rearranjar a lista, criando sub-listas, de modo que:
  // 3 - os elementos menores que o pivô fiquem antes dele
  // 4 - os elementos maiores que o pivô fiquem depois dele
  // 5 - Recursivamente, aplicar este procedimento para cada sub-lista
  // 6 - Unir todas as sub-listas já ordanadas
  static quickShort(
    vet: Array<number>,
    initialVet: number,
    endVet: number
  ): void {
    let i: number;
    let j: number;
    let pivot: number;
    let aux: number;

    i = initialVet;
    j = endVet;
    pivot = vet[(initialVet + endVet) / 2];

    while (i < j) {
      while (vet[i] < pivot) {
        i = i + 1;
      }
      while (vet[j] > pivot) {
        j = j - 1;
      }

      // SWAP
      if (i <= j) {
        aux = vet[i];
        vet[i] = vet[j];
        vet[j] = aux;
        i = i + 1;
        j = j - 1;
      }
    }

    if (j > initialVet) {
      this.quickShort(vet, initialVet, j);
    }
    if (i < endVet) {
      this.quickShort(vet, i, endVet);
    }
  }

  // Pior caso: O(N log N)
  // Estratégia:
  // Primeiramente, compara e faz, swap de elementos afastados a uma distância H
  // H máximo deve ser menor que SIZE da entrada
  // Quando H = 1, o algoritmo passa adotar a mesma estratégia do InserSort
  static shellShort(vet: Array<number>): void {
    let i: number;
    let j: number;
    let value: number;
    let h = 1;
    const size = vet.length;

    while (h < size) {
      h = 3 * h + 1;
    }

    while (h > 0) {
      for (i = h; i < size; i++) {
        value = vet[i];
        j = 1;
        while (j > h - 1 && value <= vet[j - h]) {
          vet[j] = vet[j - h];
          j = j - h;
        }
        vet[j] = value;
      }
      h = h / 3;
    }
  }

  // O(N log N)
  // Estratégia: utiliza uma estrutura de dados chamada heap (que pode ser representada por uma árvore binária)
  // Tática:
  // 1 - Percorre a lista sequencialmente
  // 2 - Para cada elemento, insere ele no heap
  // 3 - Ao final das inserções, os elementos são lidos do heap
  static heapSort(): void {}

  /**
   *
   * @param vet
   * @param key
   * @returns -1 quando o elemento a chave não for encontrada e a posição caso seja encontrada
   */
  // O(N): Pior caso
  static linearSearch(vet: Array<number>, key: number): number {
    const size = vet.length;

    for (let i = 0; i < size; i++) {
      if (key === vet[i]) {
        return i;
      }
    }

    return -1;
  }

  // O(log N)
  static binarySearch(vet: Array<number>, key: number): number {
    let initial = 0;
    let end = vet.length - 1;
    let result = -1;

    while (initial <= end) {
      let middle = Math.trunc((initial + end) / 2);
      if (key < vet[middle]) {
        end = middle - 1;
      } else if (key > vet[middle]) {
        initial = middle + 1;
      } else {
        initial = vet.length;
        result = middle;
      }
    }

    return result;
  }

  // O(log N)
  static searchBinaryTree(): void {}

  // Melhor caso: O(1)
  // Pior Caso: O(N)
  static tableHash(): void {}
}
