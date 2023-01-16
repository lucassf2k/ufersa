package unidade1;

import java.util.Scanner;

public class Question03 {
  
  private static Scanner scan = new Scanner( System.in );
  public static void main(String[] args) {

    int num1;
    int num2;

    System.out.print("Digite um número: ");
    num1 = scan.nextInt();

    System.out.print("Digite outro número: ");
    num2 = scan.nextInt();

    System.out.println(" ");
    System.out.println("SOMA: " + (num1 + num2));
    System.out.println("SUBTRAÇÂO: " + (num1 - num2));
    System.out.println("MULTIPLICAÇÂO: " + (num1 * num2));
    System.out.println("DIVISÃO: " + (num1 / num2));
    System.out.println("RESTO: " + (num1 % num2));
  }
}
