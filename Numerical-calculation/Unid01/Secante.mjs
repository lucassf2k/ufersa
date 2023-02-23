class Secante {
  #func(x) {
    return x * x * x - x * x + 2;
  }

  #secante(x0, x1, erro, iterator) {
    let x2 = 0;
    
    for (let i = 0; i < iterator; i++) {
      x2 = x1 - this.#func(x1) * (x1 - x0) / (this.#func(x1) - this.#func(x0));

      if (Math.abs(this.#func(x2)) < erro) {
        return x2;
      }

      x0 = x1;
      x1 = x2;
    }

    return x2;
  }

  calculate(x0, x1, erro, iterator) {
    const outPut = this.#secante(x0, x1, erro, iterator);
    console.log(`Zero da função: ${outPut}`);
  }
}

const methodSecante = new Secante();
methodSecante.calculate(-1.5, -0.5, 0.0000001, 100);