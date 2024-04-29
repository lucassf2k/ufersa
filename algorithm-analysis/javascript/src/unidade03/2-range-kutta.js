// JavaScript program to implement Runge
// Kutta method

// A sample differential equation
// "dy/dx = (x - y)/2"
function dydx(x, y) {
  return x + y - 2
}

// Finds value of y for a given x
// using step size h
// and initial value y0 at x0.
function rungeKutta(x0, y0, x, h) {
  // Count number of iterations
  // using step size or
  // step height h
  let n = (x - x0) / h

  let k1, k2

  // Iterate for number of iterations
  let y = y0
  for (let i = 1; i <= n; i++) {
    // Apply Runge Kutta Formulas
    // to find next value of y
    k1 = h * dydx(x0, y)
    k2 = h * dydx(x0 + 0.5 * h, y + 0.5 * k1)

    // Update next value of y
    y = y + (1.0 / 6.0) * (k1 + 2 * k2)

    // Update next value of x
    x0 = x0 + h
  }

  return y
}

// Driver Code

let x0 = 0,
  y = 1,
  x = 2,
  h = 0.2

console.log(rungeKutta(x0, y, x, h).toFixed(6))
