public class Secante {
  public static double funcao(double x) {
    // aqui é definida a função desejada
    return x * x * x - x * x + 2;
  }

  public static Output secante(double x0, double x1, double erro, int iteracoes) {
    // loop que realiza o cálculo da raiz da função
    double x2 = 0;
    Integer quantidadeIteracao = 0;
    for (int i = 0; i < iteracoes; i++) {
      // calculando o próximo valor de x
      x2 = x1 - funcao(x1) * (x1 - x0) / (funcao(x1) - funcao(x0));
      quantidadeIteracao++;
      if (Math.abs(funcao(x2)) < erro) {
        return new Output(x2, quantidadeIteracao);
      }
      // atualizando os valores de x0 e x1
      x0 = x1;
      x1 = x2;
    }
    return new Output(x2, quantidadeIteracao);
  }

  private record Output(Double valor, Integer quantidadeIteracao) {}

  public static void main(String[] args) {
    final double x0 = -1.5; // valor inicial x0
    final double x1 = -0.5; // valor inicial x1
    final double erro = 0.0000000001; // erro desejado
    final int iteracoes = 100;
    final var output = secante(x0, x1, erro, iteracoes);
    System.out.println("Zero da função: " + output.valor);
    System.out.println("Em " + output.quantidadeIteracao + " iteração");
  }
}
