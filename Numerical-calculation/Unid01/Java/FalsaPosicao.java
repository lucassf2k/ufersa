public class FalsaPosicao {
  public static double funcao(double x) {
    // aqui é definida a função desejada
    return x * x * x + x * x + x - 2;
  }

  public static Output falsaPosicao(double a, double b, double erro, int iteracoes) {
    // loop que realiza o cálculo da raiz da função
    double x = 0;
    Integer quantidadeIteracao = 0;
    for (int i = 0; i < iteracoes; i++) {
      x = b - (funcao(b) * (a - b)) / (funcao(a) - funcao(b));
      quantidadeIteracao++;

      if (Math.abs(funcao(x)) < erro) {
        return new Output(x, quantidadeIteracao);
      }

      if (funcao(a) * funcao(x) < 0) {
        b = x;
      } else {
        a = x;
      }
    }
    return new Output(x, quantidadeIteracao);
  }

  private record Output(Double valor, Integer quantidadeIteracao) {}

  public static void main(String[] args) {
    final double a = 0; // limite inferior do intervalo
    final double b = 1; // limite superior do intervalo
    final double erro = 0.0000000001; // erro desejado
    final int iteracoes = 100;
    final var output = falsaPosicao(a, b, erro, iteracoes);
    System.out.println("Zero da função: " + output.valor);
    System.out.println("Em " + output.quantidadeIteracao + " iterações");
  }
}
