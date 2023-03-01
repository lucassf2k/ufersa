class FalsaPosicao {
  #func(x) {
    return x * x * x + x - 2;
  }

  #falsaPosicao(a, b, erro, iterator) {
    let x = 0;

    for (let i = 0; i < iterator; i++) {
      x = b - (this.#func(b) * (a - b)) / (this.#func(a) - this.#func(b));

      if (Math.abs(this.#func(x)) < erro) {
        return x;
      }

      if (this.#func(a) * this.#func(x) < 0) {
        b = x;
      } else {
        a = x;
      }
    }

    return x;
  }

  calculate(a, b, erro, iterator) {
    const outPut = this.#falsaPosicao(a, b, erro, iterator);
    console.log(outPut);
  }
}

const methodFalsaPosicao = new FalsaPosicao();
methodFalsaPosicao.calculate(0, 1, 0.000001, 100);
