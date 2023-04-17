function gaussJacobi(A, b, tolerance, maxIterations) {
  const n = A.length;
  let x = new Array(n).fill(0);
  let xPrev = new Array(n).fill(0);
  let iteration = 0;
  let error = Infinity;
  
  while (iteration < maxIterations && error > tolerance) {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          sum += A[i][j] * xPrev[j];
        }
      }
      x[i] = (b[i] - sum) / A[i][i];
    }
    
    error = Math.max(...x.map((xi, i) => Math.abs(xi - xPrev[i])));
    xPrev = [...x];
    iteration++;
  }
  
  if (error <= tolerance) {
    console.log(`Converged to solution in ${iteration} iterations with error ${error}`);
    return x;
  } else {
    console.log(`Failed to converge in ${maxIterations} iterations with error ${error}`);
    return null;
  }
}