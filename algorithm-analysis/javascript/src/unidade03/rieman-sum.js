// Function to calculate the value of the function f(x)
function f(x) {
  return x ** 3 // Example function: x^3
}

// Function to calculate the Riemann sum for a given function, limits, and number of intervals
function riemannSum(f, a, b, n) {
  const deltaX = (b - a) / n
  let sum = 0
  for (let i = 0; i < n; i++) {
    const xi = a + i * deltaX
    const Ai = f(xi) * deltaX // Area of the rectangle
    sum += Ai
  }
  return sum
}

// Example usage
const a = 0 // Lower limit
const b = 4 // Upper limit
const n = 4 // Number of intervals

const result = riemannSum(f, a, b, n)
console.log('Riemann Sum:', result)
