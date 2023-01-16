package unidade1;

import java.util.Scanner;

public class Question05 {

  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {
    System.out.print("Primeiro número: " );
    Double num1 = scan.nextDouble();

    System.out.print("Segundo número: " );
    Double num2 = scan.nextDouble();   
    
    System.out.print("Terceiro número: " );
    Double num3 = scan.nextDouble();    

    Double media = (num1 + num2 + num3) / 3;

    System.out.println("A média entre " + num1 + ", " + num2 + ", " + num3 + " é: " + media);
  }
}
