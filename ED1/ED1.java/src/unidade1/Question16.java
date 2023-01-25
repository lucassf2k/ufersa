package unidade1;

import java.util.Scanner;

public class Question16 {
  
  private static Scanner scan = new Scanner(System.in);
  
  public static void main(String[] args) {
    System.out.print("Digite um número: ");
    int num1 = scan.nextInt();

    System.out.print("Digite outro número: ");
    int num2 = scan.nextInt();

    new Question16().displayingWithWhile(num1, num2);
    new Question16().displayingWithDoWhile(num1, num2);
    new Question16().displayingWithFor(num1, num2);
  }

  public void displayingWithWhile(int a, int b) {
    System.out.println("Exibindo com While");
    int count = ((a < b) ? a : b);

    while (count <= ((a > b) ? a : b)) {
      System.out.print(count++ + " ");
    }
    System.out.print("\n");
  }

  public void displayingWithDoWhile(int a, int b) {
    System.out.println("Exibindo com Do While");
    int count = ((a < b) ? a : b);

    do {
      System.out.print(count + " ");
    } while (count++ < ((a > b) ? a : b));

    System.out.print("\n");
  }

  public void displayingWithFor(int a, int b) {
    System.out.println("Exibindo com For");
    int count = ((a < b) ? a : b);

    for (int i = count; i <= ((a > b) ? a : b); i++) {
      System.out.print(i + " ");
    }
    System.out.print("\n");
  }
}
