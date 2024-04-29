function func(x) {
  return Math.log(x)
}

// Function for approximate integral
function simpsons_(ll, ul, n) {
  // Calculating the value of h
  let h = (ul - ll) / n

  // Array for storing value of x
  // and f(x)
  let x = []
  let fx = []

  // Calculating values of x and f(x)
  for (let i = 0; i <= n; i++) {
    x[i] = ll + i * h
    fx[i] = func(x[i])
  }

  // Calculating result
  let res = 0
  for (let i = 0; i <= n; i++) {
    if (i == 0 || i == n) res += fx[i]
    else if (i % 2 != 0) res += 4 * fx[i]
    else res += 2 * fx[i]
  }

  res = res * (h / 3)
  return res
}

// Driver code

// Lower limit
let lower_limit = 4

// Upper limit
let upper_limit = 5.2

// Number of interval
let n = 6

console.log(simpsons_(lower_limit, upper_limit, n))
