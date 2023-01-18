package unidade1;

import java.util.Scanner;

public class Question09 {
  
  private static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Digite o valor do raio: ");
    Double radius = scan.nextDouble();

    Double area = Math.PI * (Math.pow(radius, 2));

    System.out.println("A área de um circulo usando o raio " + 
      radius + " é de " + area);
  }
}
