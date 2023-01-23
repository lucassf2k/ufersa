package unidade1;

import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class Question20 {

  private static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("Digite seu investimento inicial: ");
    Double initialInvestiment = scan.nextDouble();

    System.out.print("Digite seu investimento mensal: ");
    Double monthlyInvestiment = scan.nextDouble();

    System.out.print("Quantos meses deseja investir? ");
    int months = scan.nextInt();

    System.out.print("Digite a taxa mensal (Ex.: 10 => 10%): ");
    Double taxaMensal = scan.nextDouble();

    Double saldo = initialInvestiment;
    Double rendimentoMensal = 0.0;
    
    for (int i = 0; i < months; i++) {
      saldo = saldo + monthlyInvestiment;
      rendimentoMensal = (saldo) * (taxaMensal / 100);

      saldo = saldo + rendimentoMensal;
    }

    System.out.println("Saldo acumulado: " + formatarMoeda(saldo));
    System.out.println("Rendimento mensal: " + formatarMoeda(rendimentoMensal));    
  }

  public static String formatarMoeda(Double value) {
    Locale localBrasil = new Locale("pt", "BR");
    return NumberFormat.getCurrencyInstance(localBrasil).format(value);
  }
}