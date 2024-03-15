# Vetor exemplo
v = np.array([3, -4, 1])

# Norma Euclidiana (norma-2)
norm_2 = np.linalg.norm(v)
print(f"Norma Euclidiana: {norm_2}")

# Norma de Manhattan (norma-1)
norm_1 = np.linalg.norm(v, ord=1)
print(f"Norma de Manhattan: {norm_1}")

# Norma do Infinito (norma máxima)
norm_inf = np.linalg.norm(v, ord=np.inf)
print(f"Norma do Infinito: {norm_inf}")

# Determinante
# Matriz exemplo
matrix = np.array([[4, 7], [2, 6]])

# Calcular determinante
determinante = np.linalg.det(matrix)

print(f"Determinante da matriz:\n{matrix}\n\nÉ: {determinante}")

# Inversa
# Matriz exemplo
matrix = np.array([[4, 7], [2, 6]])

# Calcular a matriz inversa
inverse_matrix = np.linalg.inv(matrix)

print(f"Matriz Inversa de:\n{matrix}\n\nÉ:\n{inverse_matrix}")

# Condicionamento
# Matriz exemplo
matrix = np.array([[4, 7], [2, 6]])

# Calcular o número de condição
condition_number = np.linalg.cond(matrix)

print(f"Número de condição da matriz:\n{matrix}\n\nÉ: {condition_number}")