public class NewtonRaphson {
  public static double funcao(double x) {
    // aqui é definida a função desejada
    return x * x * x - x * x + 2;
  }

  public static double derivada(double x) {
    // aqui é definida a derivada da função desejada
    return 3 * x * x + 2 * x;
  }

  public static Output newton(double x0, double erro, int iteracoes) {
    // loop que realiza o cálculo da raiz da função
    double x = x0;
    Integer quantidadeIteracao = 0;
    for (int i = 0; i < iteracoes; i++) {
      // encontrando o próximo valor de x
      double x1 = x - funcao(x) / derivada(x);
      quantidadeIteracao++;

      if (Math.abs(x1 - x) < erro) {
        return new Output(x1, quantidadeIteracao);
      }
      x = x1;
    }
    return new Output(x, quantidadeIteracao);
  }

  private record Output(Double valor, Integer quantidadeIteracao) {}

  public static double arredonda(double numero, int casasDecimais) {
    double fator = Math.pow(10, casasDecimais);
    return Math.round(numero * fator) / fator;
  }

  public static void main(String[] args) {
    final double x0 = -1; // chute inicial
    final double erro = 0.0000000001; // erro desejado
    final int iteracoes = 100;
    final var output = newton(x0, erro, iteracoes);
    System.out.println("Zero da função: " + output.valor);
    System.out.println("Em " + output.quantidadeIteracao + " iterações");
  }
}
