import numpy as np

def newton_interpolation(x, x_values, y_values):
    n = len(x_values)
    coefficients = np.zeros(n)
    for i in range(n):
        coefficients[i] = divided_difference(x_values[:i+1], y_values[:i+1])
    
    result = coefficients[0]
    for i in range(1, n):
        term = coefficients[i]
        for j in range(i):
            term *= (x - x_values[j])
        result += term
    return result

def divided_difference(x_values, y_values):
    n = len(x_values)
    if n == 1:
        return y_values[0]
    else:
        return (divided_difference(x_values[1:], y_values[1:]) - 
                divided_difference(x_values[:-1], y_values[:-1])) / (x_values[-1] - x_values[0])

# Example data points
x_values = [1, 2, 3, 4, 5]
y_values = [10, 7, 5, 3, 2]

# Calculate coefficients using divided differences
coefficients = [divided_difference(x_values[:i+1], y_values[:i+1]) for i in range(len(x_values))]

# Print coefficients
print("Coefficients:", coefficients)

# Calculate interpolated values for plotting
x_range = np.linspace(min(x_values), max(x_values), 100)
y_range = [newton_interpolation(x, x_values, y_values) for x in x_range]

# Plot the interpolated curve
import matplotlib.pyplot as plt
plt.plot(x_range, y_range, label='Newton Interpolation')
plt.scatter(x_values, y_values, color='red', label='Data Points')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Newton Polynomial Interpolation')
plt.legend()
plt.grid(True)
plt.show()