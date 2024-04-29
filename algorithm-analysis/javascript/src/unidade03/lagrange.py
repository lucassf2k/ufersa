import numpy as np
import matplotlib.pyplot as plt

def lagrange_interpolation(x, x_values, y_values):
    result = 0
    for i in range(len(y_values)):
        term = y_values[i]
        for j in range(len(x_values)):
            if j != i:
                term *= (x - x_values[j]) / (x_values[i] - x_values[j])
        result += term
    return result

# Dados de exemplo
x_values = [1, 3]
y_values = [2, 4]

# Calculando os pontos para o gráfico
x_range = np.linspace(min(x_values), max(x_values), 100)
y_range = [lagrange_interpolation(x, x_values, y_values) for x in x_range]

# Plotando os pontos e a interpolação
plt.scatter(x_values, y_values, color='red', label='Pontos dados')
plt.plot(x_range, y_range, label='Interpolação de Lagrange')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Interpolação de Lagrange')
plt.legend()
plt.grid(True)
plt.show()