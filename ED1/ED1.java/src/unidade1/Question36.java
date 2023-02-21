package unidade1;

import java.util.Scanner;

public class Question36 {

  static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("Digite um número: ");
    int num = scan.nextInt();

    int outPut = fatorialRecursivo(num);

    System.out.println("Fatorial: " + outPut);
  }

  public static int fatorialRecursivo(int value) {
    int fatorial;
    if (value == 0) {
      return 1;
    } else {
      fatorial = value * fatorialRecursivo(value - 1);

      return fatorial;
    }
  }
}
