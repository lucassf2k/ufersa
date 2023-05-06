	
import numpy as np  # Ax=b, então x=inv(A).b

A = np.array(  (  (2,3,1)   ,   (1,2,3)  ,  (3,1,2)  )  )

print("Matriz A:", A)

Determinante = np.linalg.det(A)   

print("O determinante de A é \n: ", Determinante)

if (Determinante != 0):

    print("A matriz A é não singular, então é possível encontrar a decomposição LU")

    u11=A[0,0]

    u12=A[0,1]

    u13=A[0,2]

    u21=0

    l21=((A[1,0]/u11))

    u22=A[1,1]-l21*u12

    u23=A[1,2]-l21*u13

    u31=0

    u32=0

    l31=(A[2,0]/(u11))

    l32=((A[2,1]-l31*u12)/(u22))       #l[k,i] = (A[k,i]-l[k,j]*U[j,i]/U[i,i])    regra para criar o caso nxn         

    u33=A[2,2]-l31*u13-l32*u23         # U[i,k] = A[i,k] - L[i,j]*U[j,k]  regra par criar o caso  nxn

    U = (  (u11,u12,u13)  ,  (u21,u22,u23), (u31,u32,u33)  ) 

    print("A matriz U é:", U)

    l11=1

    l12=0

    l13=0

    l22=1

    l23=0

    l33=1

    L = (  (l11,l12,l13)  ,  (l21,l22,l23), (l31,l32,l33)  ) 

    print("A matriz L com diagonal unitária é:", L)

else:

    print("A matriz A tem determinante zero e não é possível encontrar sua decomposição LU")

    Inversa1 = np.linalg.inv(L)

print("A inversa de L é \n: ", Inversa1)

Inversa2 = np.linalg.inv(U)

print("A inversa de U é \n: ", Inversa2)

#

Solução de um sistema liner Ax=b; (LU)x=b;Ux=y;Ly=b
b = np.array((9,6,8))

#y=b.dot(InvL)

y  = np.dot(Inversa1, b)

print(y)

x=np.dot(Inversa2,y)

print(x)