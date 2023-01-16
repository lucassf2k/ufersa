package unidade1;

import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class Question06 {

  private static Scanner scan = new Scanner( System.in );

  private static final float SODA_PRICE = 1.5f;
  private static final float PIZZA_SLICE = 3.0f;
  private static final float WAITER_FEE = 0.10f;
  public static void main(String[] args) {
    System.out.print("Quantidade de refri: ");
    int amountSoda = scan.nextInt();

    System.out.print("Quantidade de fatias de pizza: ");
    int amountWaiterPizza = scan.nextInt();

    System.out.print("Quantidade de pessoas: ");
    int amountPeople = scan.nextInt();

    System.out.println(" ");

    float totalWithoutFee = 
    (amountSoda * SODA_PRICE) + (amountWaiterPizza * PIZZA_SLICE);
    System.out.println("Total sem a taxa do garçom: " + 
      formatCurrency(totalWithoutFee));

    float waiterFee = WAITER_FEE * totalWithoutFee;
    float totalWithFee = totalWithoutFee + waiterFee;
    System.out.println("Total com a taxa do garçom: " + 
      formatCurrency(totalWithFee));

    float apportionmentPerPersonWithRate = totalWithFee / amountPeople;
    System.out.println("Rateio por pessoa com a taxa: " + 
      formatCurrency(apportionmentPerPersonWithRate));

  }

  private static String formatCurrency(float value) {
    Locale br = new Locale("pt", "BR");
    String currencyBrazil = NumberFormat
      .getCurrencyInstance(br).format(value);

    return currencyBrazil;
  }
}