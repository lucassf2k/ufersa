class PontoFixo {
  #func(x) {
    return x * x * x + x * x + x -2;  
  }

  #g(x) {
    const expression = (- (x*x*x) - x + 2);
    return Math.sqrt(expression);
  }

  #fixedPoint(x0, erro, iterator) {
    let x = x0;

    for (let i = 0; i < iterator; i++) {
      let newX = this.#g(x);

      if (Math.abs(newX - x) < erro) {
        return newX;
      }

      x = newX;
    }

    return x;
  }

  calculate(x0, erro, iterator) {
    const outPut = this.#fixedPoint(x0, erro, iterator);
    console.log(`Zero da função: ${outPut}`);
  }
}

const methodFixedPoint = new PontoFixo();
methodFixedPoint.calculate(-1, 0.000001, 100);
