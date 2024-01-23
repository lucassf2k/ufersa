public class Bissecao {
	private Bissecao() {}
  	public static double funcao(double x) {
		// aqui é definida a função desejada
		return x * x * x - x * x + 2;
	}

	public static Output bissecao(double a, double b, double erro, int iteracoes) {
		// loop que realiza o cálculo da raiz da função
		double x = 0;
		Integer quantidadeIteracao = 0;
		for (int i = 0; i < iteracoes; i++) {
			// encontrando o ponto médio do intervalo
			x = (a + b) / 2;
			quantidadeIteracao++;
			if (Math.abs(funcao(x)) < erro) {
				return new Output(x, quantidadeIteracao);
			}
			// verificando se a raiz está no intervalo [a, x]
			if (funcao(a) * funcao(x) < 0) {
				// se sim, atualiza o valor de b
				b = x;
			} else {
				// se não, atualiza o valor de a
				a = x;
			}
		}
		return new Output(x, quantidadeIteracao);
		
	}

	private record Output(Double valor, Integer quantidadeIteracao) {}

	public static void main(String[] args) {
		final double a = -2; // limite inferior do intervalo
		final double b = -1; // limite superior do intervalo
		final double erro = 0.0000000001; // erro desejado
		final int iteracoes = 100;
		final var output = bissecao(a, b, erro, iteracoes);
		System.out.println("Zero da função: " + output.valor);
		System.out.println("Em " + output.quantidadeIteracao + " iterações");
	}
}
