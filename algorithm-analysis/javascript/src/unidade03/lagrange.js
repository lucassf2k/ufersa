// Function to calculate the Lagrange polynomial
function lagrangeInterpolation(x, xValues, yValues) {
  let result = 0

  for (let i = 0; i < yValues.length; i++) {
    let term = yValues[i]
    for (let j = 0; j < xValues.length; j++) {
      if (j !== i) {
        term *= (x - xValues[j]) / (xValues[i] - xValues[j])
      }
    }
    result += term
  }

  return result
}

// Example usage
const xValues = [1, 3]
const yValues = [2, 4]
const x = 2
const result = lagrangeInterpolation(x, xValues, yValues)
console.log('The value of y at x =', x, 'is', result)
