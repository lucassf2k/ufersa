// javascript program to implement Simpson's rule

// Given function to be integrated
function func(x) {
  return 1 / (1 + x * x)
}

// Function to perform calculations
function calculate(lower_limit, upper_limit, interval_limit) {
  let value
  let interval_size = (upper_limit - lower_limit) / interval_limit

  let sum = func(lower_limit) + func(upper_limit)

  // Calculates value till integral limit
  for (let i = 1; i < interval_limit; i++) {
    if (i % 3 == 0) sum = sum + 2 * func(lower_limit + i * interval_size)
    else sum = sum + 3 * func(lower_limit + i * interval_size)
  }
  return ((3 * interval_size) / 8) * sum
}

// Driver Function
let interval_limit = 10
let lower_limit = 1
let upper_limit = 10
let integral_res = calculate(lower_limit, upper_limit, interval_limit)

console.log(integral_res)
