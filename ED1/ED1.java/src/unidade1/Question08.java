package unidade1;

import java.util.Scanner;

public class Question08 {
  
  private static Scanner scan = new Scanner( System.in );
  public static void main(String[] args) {

    System.out.print("Digite seu peso: ");
    float weight = scan.nextFloat();

    System.out.print("Digite sua altura: ");
    float height = scan.nextFloat();

    if (height == 0) {
      System.out.println("CUIDADO! Divisão por zero.");
      return;
    }

    float imc = weight / (float)(Math.pow(height, 2));

    System.out.println("Seu IMC: " + imc);

  }

}
