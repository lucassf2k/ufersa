def jacobi(A, b, x0, tol, N):
    # preliminares
    A = A.astype('double')
    b = b.astype('double')
    x0 = x0.astype('double')
    n = np.shape(A)[0]
    x = np.zeros(n)
    it = 0
    
    # Verifica se a matriz A é diagonal dominante
    ehDiagonalDominante = all(2 * abs(A[i, i]) >= np.sum(np.abs(A[i, :])) for i in range(n))
    
    if not ehDiagonalDominante:
        print('A matriz A não é diagonal dominante')
        return None
    
    # iterações
    while it < N:
        it += 1
        
        # iteração de Jacobi
        for i in np.arange(n):
            x[i] = b[i]
            for j in np.concatenate((np.arange(0, i), np.arange(i+1, n))):
                x[i] -= A[i, j] * x0[j]
            x[i] /= A[i, i]
        
        # tolerância
        if np.linalg.norm(x - x0, np.inf) < tol:
            return x
        
        # prepara nova iteração
        x0 = np.copy(x)
    
    raise NameError('num. max. de iteracoes excedido.')