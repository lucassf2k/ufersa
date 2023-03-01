class Bisseccao {
  #func(x) {
    return x * x * x - x * x + 2;
  }

  #bisseccao(a, b, erro, iterator) {
    let x = 0;

    for (let i = 0; i < iterator; i++) {
      x = (a + b) / 2;

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
    const outPut = this.#bisseccao(a, b, erro, iterator);
    console.log(`Zero da função: ${outPut}`);
  }
}

const methodBisseccao = new Bisseccao();
methodBisseccao.calculate(-2, -1, 0.0000001, 100);
