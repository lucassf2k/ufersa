// JavaScript program to find approximation of an ordinary
// differential equation using euler method

// Consider a differential equation
// dy/dx=(x + y + xy)
function func(x, y) {
  return x + y + x * y
}

// Function for Euler formula
function euler(x0, y, h, x) {
  let temp = -0

  // Iterating till the point at which we
  // need approximation
  while (x0 < x) {
    temp = y
    y = y + h * func(x0, y)
    x0 = x0 + h
  }

  // Printing approximation
  console.log('Approximate solution at x = ' + x + ' is ' + y)
}

// Driver Code

// Initial Values
let x0 = 0
let y0 = 1
let h = 0.025

// Value of x at which we need approximation
let x = 0.1

euler(x0, y0, h, x)
