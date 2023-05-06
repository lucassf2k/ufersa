#Usando Pacotes

import numpy as np 

  

A = np.array([[1.0,2.0,3.0], [2.0,8.0,22.0],[3.0,22.0,82.0]]) 

cholesky = np.linalg.cholesky(a) 

  

print(cholesky) 

 

import pprint

import scipy

import scipy.linalg   # SciPy Linear Algebra Library

 

A = scipy.array([[6, 3, 4, 8], [3, 6, 5, 1], [4, 5, 10, 7], [8, 1, 7, 25]])

L = scipy.linalg.cholesky(A, lower=True)

U = scipy.linalg.cholesky(A, lower=False)

 

print ("A:")

pprint.pprint(A)

 

print ("L:")

pprint.pprint(L)

 

print ("U:")

pprint.pprint(U)

 

#Cálculo manual 3x3

import numpy as np

A = np.array([[1.0,2.0,3.0], [2.0,8.0,22.0],[3.0,22.0,82.0]]) 

l11=np.sqrt(A[0,0])

l12=0

l13=0

l21=(A[1,0]/l11)

l22=np.sqrt(A[1,1]-l21**2)

l23=0

l31=(A[2,0]/l11)

l32=((A[2,1]-l21*l31)/l22)

l33=np.sqrt(A[2,2]-l31**2-l32**2)

L=((l11,0,0),(l21,l22,0),(l31,l32,l33))

print(L)

 

#Solução do Sistema

b = np.array((5,6,-10))

Lt = np.transpose(L)

Inversa1 = np.linalg.inv(L)

Inversa2 = np.linalg.inv(Lt)

y  = np.dot(Inversa1, b)

x = np.dot(Inversa2,y)

print("A solução dos sitema é:", x)

 

from math import sqrt

from pprint import pprint

 

def cholesky(A):

    """Performs a Cholesky decomposition of A, which must 

    be a symmetric and positive definite matrix. The function

    returns the lower variant triangular matrix, L."""

    n = len(A)

 

    # Create zero matrix for L

    L = [[0.0] * n for i in range(n)]

 

    # Perform the Cholesky decomposition

    for i in range(n):

        for k in range(i+1):

            tmp_sum = sum(L[i][j] * L[k][j] for j in range(k))            

            if (i == k): # Diagonal elements

                # LaTeX: l_{kk} = \sqrt{ a_{kk} - \sum^{k-1}_{j=1} l^2_{kj}}

                L[i][k] = sqrt(A[i][i] - tmp_sum)

            else:

                # LaTeX: l_{ik} = \frac{1}{l_{kk}} \left( a_{ik} - \sum^{k-1}_{j=1} l_{ij} l_{kj} \right)

                L[i][k] = (1.0 / L[k][k] * (A[i][k] - tmp_sum))

    return L

 

A = [[1, 2, 3], [2, 8, 22], [3, 22, 82]]

L = cholesky(A)

 

print ("A:")

pprint(A)

 

print ("L:")

pprint(L)

 

print ("Lt:")

Lt = np.transpose(L)

pprint(Lt)

 

#Solução de um sistema liner Ax=b; (LLt)x=b;Ltx=y;Ly=b
b = np.array((5,6,-10))

Inversa1 = np.linalg.inv(L)

Inversa2 = np.linalg.inv(Lt)

y  = np.dot(Inversa1, b)

x = np.dot(Inversa2,y)

print(x)