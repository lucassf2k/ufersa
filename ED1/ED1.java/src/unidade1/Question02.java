package unidade1;

import java.util.Scanner;

public class Question02 {

   private static Scanner scanner = new Scanner( System.in );

  public static void main(String[] args) {

    System.out.println("Digite os dados que se pedem");


    Question02.myPrint("Seu Nome Completo: ");
    String fullName = scanner.nextLine();

    Question02.myPrint("Sua Idade: ");
    int age = scanner.nextInt();

    Question02.myPrint("Sua Altura: ");
    Double height = scanner.nextDouble();

    Question02.myPrint("Primeira letra do seu nome: ");
    char fistLetterName = scanner.next().charAt(0);

    System.out.println("==========================");

    System.out.println("Nome completo: " + fullName);
    System.out.println("Minha idade: " + age);
    System.out.println("Minha altura: " + height);
    System.out.println("Primeira letra do meu nome: " + fistLetterName);
  }

  private static void myPrint(String text) {
    System.out.print(text);
  }
}
