import java.util.Scanner;

public class EliminacaoGauss {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        // Recebe o número de equações
        System.out.print("Digite o número de equações: ");
        int n = sc.nextInt();
        
        // Cria a matriz dos coeficientes e o vetor dos termos independentes
        double[][] matriz = new double[n][n+1];
        
        // Recebe os valores da matriz e do vetor
        System.out.println("Digite os valores da matriz dos coeficientes:");
        for(int i=0; i<n; i++) {
            for(int j=0; j<n+1; j++) {
                matriz[i][j] = sc.nextDouble();
            }
        }
        
        // Realiza a eliminação de Gauss
        for(int k=0; k<n-1; k++) {
            for(int i=k+1; i<n; i++) {
                double m = matriz[i][k] / matriz[k][k];
                for(int j=k; j<n+1; j++) {
                    matriz[i][j] = matriz[i][j] - m * matriz[k][j];
                }
            }
        }
        
        // Exibe a matriz triangular superior resultante
        System.out.println("\nMatriz triangular superior resultante:");
        for(int i=0; i<n; i++) {
            for(int j=0; j<n+1; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }
        
        // Realiza a retrosubstituição
        double[] x = new double[n];
        for(int i=n-1; i>=0; i--) {
            double s = 0;
            for(int j=i+1; j<n; j++) {
                s = s + matriz[i][j] * x[j];
            }
            x[i] = (matriz[i][n] - s) / matriz[i][i];
        }
        
        // Exibe os valores das variáveis
        System.out.println("\nValores das variáveis:");
        for(int i=0; i<n; i++) {
            System.out.println("x" + (i+1) + " = " + x[i]);
        }
        
        sc.close();
    }

}