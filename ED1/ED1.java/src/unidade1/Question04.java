package unidade1;

import java.util.Scanner;

public class Question04 {

  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {
    System.out.print("Primeiro número: " );
    int num1 = scan.nextInt();

    System.out.print("Segundo número: " );
    int num2 = scan.nextInt();   
    
    System.out.print("Terceiro número: " );
    int num3 = scan.nextInt();    

    int media = (num1 + num2 + num3) / 3;

    System.out.println("A média entre " + num1 + ", " + num2 + ", " + num3 + " é: " + media);
  }
}
