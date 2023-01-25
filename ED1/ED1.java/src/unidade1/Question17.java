package unidade1;

import java.util.Scanner;

public class Question17 {
  
  private static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Digite um número: ");
    int num1 = scan.nextInt();

    System.out.print("Digite outro número: ");
    int num2 = scan.nextInt();

    int maior = (num1 > num2) ? num1 : num2;
    int menor = (num1 < num2) ? num1 : num2;

    for (int i = menor; i <= maior; i++) {
      if (!(i % 2 == 0)) {
        System.out.print(i + " ");
      }
    }
    System.out.print("\n");
  }
}
