public class PontoFixo {
  public static double funcao(double x) {
    // função desejada
    return x * x * x + x * x + x - 2;
  }

  public static double g(double x) {
    // ponto g, ou seja, a aproximação da solução
    return -Math.sqrt(-(x * x * x) - x + 2);
  }

  /**
   * Método para calcular a solução de uma equação de ponto fixo.
   * x0 Valor inicial para o cálculo da solução.
   * erro Erro máximo desejado.
   * iteracoes Número máximo de iterações.
   * Valor da solução encontrada.
   */
  public static Output pontoFixo(double x0, double erro, int iteracoes) {
    double x = x0;
    // loop que realiza o cálculo da solução
    Integer quantitidadeIteracao = 0;
    for (int i = 0; i < iteracoes; i++) {
      // calculando o novo x
      double xNovo = g(x);
      quantitidadeIteracao++;
      // verificando se o erro é suficientemente pequeno
      if (Math.abs(xNovo - x) < erro) {
        return new Output(xNovo, quantitidadeIteracao);
      }
      // atualizando o valor de x
      x = xNovo;
    }
    // retorna o último valor de x calculado
    return new Output(x, quantitidadeIteracao);
  }

  private record Output(Double valor, Integer quantidadeIteracao) {}

  public static void main(String[] args) {
    final double x0 = -1; // ponto inicial
    final double erro = 0.0000000001; // erro desejado
    final int iteracoes = 100; // número máximo de iterações
    final var output = pontoFixo(x0, erro, iteracoes);
    System.out.println("Zero da função: " + output.valor);
    System.out.println("Em " + output.quantidadeIteracao + " iterações");
  }
}
