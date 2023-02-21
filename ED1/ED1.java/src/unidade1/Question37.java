package unidade1;

import java.util.Scanner;

public class Question37 {
  static Scanner scan = new Scanner(System.in);
  public static void main(String[] args) {
    System.out.println("Digite um número: ");
    int a = scan.nextInt();
    
    System.out.println("Digite outro número maior: ");
    int b = scan.nextInt();

    int outPutRepetition = somatorioRepetition(a, b);
    System.out.println(outPutRepetition);

    System.out.println("Recursivo");
    int outPutRecursive = somatorioRecursivo(a, b);
    System.out.println(outPutRecursive);

  }

  public static int somatorioRepetition(int a, int b) {
   int sum = 0;

   for (int i = a; i <= b; i++) {
    sum += i;
   }

    return sum;
  }

  public static int somatorioRecursivo(int a, int b) {

    int sum;

    if ( a == b ) {
      sum = a;
    } else {
      System.out.println("Empilhando....");
      sum = a + somatorioRecursivo(a + 1, b);
      System.out.println("Desempilhando....");
    }

    return sum;
  }
}
