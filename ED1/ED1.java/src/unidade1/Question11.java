package unidade1;

import java.util.Scanner;

public class Question11 {

  private static Scanner scan = new Scanner( System.in );

  public static void main(String[] args) {

    Double account1 = 100.0;
    Double account2 = 100.0;

    System.out.print("Quanto deseja transferir? ");
    Double amountTransferred = scan.nextDouble();

    if (amountTransferred <= account1) {
      account2 += amountTransferred;
      account1 -= amountTransferred;
      System.out.println("Transferência com sucesso!");
    } else {
      System.out.println("Saldo insuficiente!");
    }
  }

}
