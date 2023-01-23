package unidade1;

import java.util.Scanner;

public class Question21 {
  
  private static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Digite um número: ");
    int num = scan.nextInt();

    int count = 0;
    for (int i = num; i > 1 ; i--) {
      if (num % i == 0) {
        count = count + 1;
      } 
    }

    if (count == 1) {
      System.out.println("Número é PRIMO!");
    } else {
      System.out.println("Número não é PRIMO");
    }
  }
}
