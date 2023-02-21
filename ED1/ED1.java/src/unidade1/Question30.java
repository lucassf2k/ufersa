package unidade1;

import java.util.Scanner;

public class Question30 {

  static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Digite uma frase ou palavra: ");
    String word = scan.nextLine();

    String[] wordSplited = word.split("");

    String invertedWord = "";

    for (int i = wordSplited.length - 1; i >= 0; i--) {
      invertedWord += wordSplited[i];
    }

    System.out.println("Sua palavra ou frase: " + word);

    System.out.println("A palavra ou frase invertida: " + invertedWord);
  }
}
