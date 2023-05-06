#Método da Eliminação Gaussina para um sistema matricial 3x3  e matriz de termos independentes 3x1

E = np.array([[1,1,1,1],[2,1,-1,0],[2,2,1,1]], dtype='double')

print(E)

 

#L2 <-> L1

aux = np.copy(E[1,:])

E[1,:] = np.copy(E[0,:])

E[0,:] = np.copy(aux)

print(E)

 

#zera E[1:2,0]

E[1,:] = E[1,:] - (E[1,0]/E[0,0])*E[0,:]

E[2,:] = E[2,:] - (E[2,0]/E[0,0])*E[0,:]

print(E)

 

#zera E[2,1]

E[2,:] = E[2,:] - (E[2,1]/E[1,1])*E[1,:]

print(E)

 

 

#sub. regressiva

x = np.zeros(3)

x[2] = E[2,3]/E[2,2];

x[1] = (E[1,3] - E[1,2]*x[2])/E[1,1];

x[0] = (E[0,3] - E[0,2]*x[2] - E[0,1]*x[1])/E[0,0]

print(x)