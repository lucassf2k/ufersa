class NewtonRaphson {
  #func(x) {
    return x * x * x - x * x +2;  
  }

  #derivative(x) {
    return 3 * x * x + 2 * x; 
  }

  #newtonRaphson(x0, erro, iterator) {
    let x = x0;

    for (let i = 0; i < iterator; i++) {
      let x1 = x - (this.#func(x) / this.#derivative(x));

      if (Math.abs(x1 - x) < erro) {
        return x1;
      } 

      x = x1;
    }

    return x;
  }

  calculate(x0, erro, iterator) {
    const outPut = this.#newtonRaphson(x0, erro, iterator);
    console.log(`Zero da função: ${outPut}`);
  }
}

const methodNewtonRaphson = new NewtonRaphson();
methodNewtonRaphson.calculate(-1, 0.0000001, 100);
