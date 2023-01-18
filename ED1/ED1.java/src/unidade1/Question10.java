package unidade1;

import java.util.Scanner;

public class Question10 {
  
  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {
    System.out.print("Digite um número: ");
    int num = scan.nextInt();

    if (num % 2 == 0) {
      System.out.println("É PAR");
    } else {
      System.out.println("É ÍMPAR");
    }
  }
}
