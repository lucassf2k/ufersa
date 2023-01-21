package unidade1;

import java.util.Scanner;

public class Question12 {
  
  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {
    System.out.print("Sua média parcial: ");
    float partialAverage = scan.nextFloat();

    if (partialAverage >= 7) {
      System.out.println("APROVADO!");
    } else if (partialAverage >= 3.5) {
      System.out.println("PROVA FINAL!");
    } else {
      System.out.println("REPROVADO!");
    }
  }
}
