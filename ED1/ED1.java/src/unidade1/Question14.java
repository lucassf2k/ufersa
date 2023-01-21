package unidade1;

import java.util.Scanner;

public class Question14 {
  
  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {
    System.out.println("Equação do 2 grau");
    System.out.print("Valor de a: ");
    Double a = scan.nextDouble();

    System.out.print("Valor de b: ");
    Double b = scan.nextDouble();

    System.out.print("Valor de c: ");
    Double c = scan.nextDouble();

    Double delta = delta(a, b, c);


    if (delta > 0) {
      System.out.println("Delta > 0, temos duas raizes distintas");
      calculatingRoots(a, b, c, delta);
    } else if (delta == 0) {
      System.out.println("Delta = 0, temos duas raizes iguais");
      calculatingRoots(a, b, c, delta);
    } else {
      System.out.println("Delta < 0, não temos raizes reais");
    }
  }

  public static Double delta(Double a, Double b, Double c) {
    return Math.pow(b, 2) - (4 * a * c);
  }

  public static void calculatingRoots(Double a, Double b, Double c, Double delta) {
    Double x1 = 0.0;
    Double x2 = 0.0;

    if (delta > 0) {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
    } else if (!(delta < 0)) {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
    }
    System.out.println("Suas raizes são: " + x1 + " " + x2);
  } 
}
