package unidade1;

import java.util.Scanner;

public class Question13 {
  
  private static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Sua nota 1: ");
    float grade1 = scan.nextFloat();
   
    System.out.print("Sua nota 2: ");
    float grade2 = scan.nextFloat();

    System.out.print("Sua nota 3: ");
    float grade3 = scan.nextFloat();

    float partailAverage = (grade1 + grade2 + grade3) / 3;

    if (partailAverage >= 7) {
      System.out.println("APROVADO!");
    } else if (partailAverage >= 3.5f) {
      float missingGrade = Question13.missingFinalExam(partailAverage);
      System.out.println("RECUPERAÇÂO! falta " + missingGrade + " na prova final");
    } else {
      System.out.println("REPROVADO!");
    }
  }

  public static float missingFinalExam(float partialAverage) {
    float missing = Math.abs( (10 - (partialAverage * 6)) / 4);

    return missing;
  }
}
