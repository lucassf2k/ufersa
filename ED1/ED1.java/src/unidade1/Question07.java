package unidade1;

import java.util.Scanner;

public class Question07 {
  
  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {
    System.out.print("Digite um número: ");
    Double num1 = scan.nextDouble();

    System.out.print("Digite outro número: ");
    Double num2 = scan.nextDouble();

    Double division = num1 / num2;

    if (num2.equals(0.0)) {
      System.out.println("CUIDADO! Divisão por zero!");
    } else {
      System.out.println("Resultado: " + division);
    }
  }
}
