import numpy as np # A.x =b (L.U)x=b
import scipy.linalg

A = np.array(((1, 1, -1,2), (2, 3 ,-4,0), (0, -2, 0,-10),(4,-1,0,-5)))

b = np.array((2, 2, 2,20))

def LU(A,b): #Ax=b, LUx=b, Ly=b, Ux=y, x=Linv.Uinv.b : solução
  L,U =scipy.linalg.lu(A,permute_l=True)
  y=scipy.linalg.solve(L,b)
  x=scipy.linalg.solve(U,y)
  return x

print("A solução do sistema linear é: ", LU(A,b))

_______________________________________________________

import numpy as np
autovalores = np.linalg.eig(A)
print(autovalores)

 
# autovalore estão na posição 0 d array retormado | na outra posição esttão os autovetores
________________________________________________________

Determinante = np.linalg.det(A)
print(Determinante)

 

________________________________________________________

Inversa = np.linalg.inv(A)
print("A inversa de A é: ", Inversa)

 

________________________________________________________

numero_condicionamento = np.linalg.cond(A)
print(numero_condicionamento)

 

________________________________________________________

norma = np.linalg.norm(A)
print(norma)

 

________________________________________________________

norma1 = np.linalg.norm(Inversa)
print(norma1)

 

_________________________________________________________

cond = norma*norma1
print(cond)

 

________________________________________________________

rank = np.linalg.matrix_rank(A)
print(rank)
