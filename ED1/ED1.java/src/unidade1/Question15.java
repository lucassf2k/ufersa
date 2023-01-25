package unidade1;

import java.util.Scanner;

public class Question15 {
  
  private static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Digite um número: ");
    int num = scan.nextInt();

    if (num >= 0 && num <= 5) {
      System.out.println(new Question15().numberInWordsRange0At5(num));
    } else {
      System.out.println("Valor inválido");
    }
  }

  public String numberInWordsRange0At5(int num) {
    String result;
    if (num == 0) {
      result = "Zero";
    } else if (num == 1) {
      result = "Um";
    } else if (num == 2) {
      result = "Dois";
    } else if (num == 3) {
      result = "Três";
    } else if (num == 4) {
      result = "Quatro";
    } else if (num == 5) {
      result = "Cinco";
    } else {
      result = "";
    }

    return result;
  }
}
