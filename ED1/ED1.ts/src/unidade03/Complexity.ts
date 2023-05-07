/**
 * Da melhor para a pior
 *
 * Complexidade tem a notação -> Big 0. Que analisa baseado nas entradas
 * O(1) -> complexidade constante, ou seja, independente da entrada nosso código executará igual
 * O(log n) ->
 * O(n)
 * O(n log n)
 * O(n^2)
 * O(n^3)
 * O(2^n)
 * O(n!)
 *
 * Passo a passo para calcular a complexidade
 * 1 - Levar em consideração apenas as repetições do código
 * 2 - Verificar a complexidade das funções/metódos da linguagem (se utilizado)
 * 3 - Ignorar as contantes e utilizar o termo de maior grau
 */

export class Complexity {
  // O(N) -> Linear
  example01(v: Array<number>, X: number): boolean {
    const size = v.length;
    // O(N)
    for (let i = 0; i < size; i++) {
      if (v[i] === X) true;
    }

    return false;
  }

  // O(N) * O(N) = O(N²) -> Quadrática
  example02(v: Array<number>): boolean {
    const size = v.length;
    // O(N)
    for (let i = 0; i < size; i++) {
      // O(N)
      for (let j = 0; j < size; j++) {
        if (i !== j && v[i] === v[j]) {
          return true;
        }
      }
    }

    return false;
  }

  // O(N)*O(N) + O(N) + O(N)
  // O(N²) + 2*O(N)
  // O(N²) + O(N)
  // O(N²) -> Quadrática
  example03(v: Array<number>): number {
    const size = v.length;
    let bla = 0;
    // O(N)
    for (let i = 0; i < size; i++) {
      // O(N)
      for (let j = 0; j < size; j++) {
        if (v[i] === v[j]) {
          bla++;
        }
      }
    }

    let ble = 0;
    // O(N)
    for (let i = 0; i < size; i++) {
      if (v[i] === 10) {
        ble = 2 * ble;
      }
    }

    let bli = 0;
    // O(N)
    for (let i = 0; i < size; i++) {
      if (v[i] === 5) {
        bli += 5;
      }
    }

    return bla + ble + bli;
  }

  // O(N)*O(M) -> N*M
  example04(v: Array<number>, w: Array<number>): boolean {
    const sizeV = v.length;
    const sizeW = w.length;
    // O(N)
    for (let i = 0; i < sizeV; i++) {
      // O(M)
      for (let j = 0; j < sizeW; j++) {
        if (v[i] === v[j]) {
          return true;
        }
      }
    }

    return false;
  }

  // O(N) + O(N)
  // 2O(N)
  // O(N) -> Linear
  example05(ages: Array<number>): boolean {
    const size = ages.length;
    let minorAge = 200;
    // O(N)
    for (let i = 0; i < size; i++) {
      if (ages[i] < minorAge) {
        minorAge = ages[i];
      }
    }
    let cont = 0;
    // O(N)
    for (let i = 0; i < size; i++) {
      if (ages[i] === minorAge) {
        cont++;
      }
    }

    return cont > 1;
  }
}
