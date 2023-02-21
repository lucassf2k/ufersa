package unidade1;

import java.util.ArrayList;
import java.util.List;

class Letter {
  private char caracteres;
  private int amount = 0;

  public void setCaracteres(char caracteres) {
    this.caracteres = caracteres;
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public char getCaracteres() {
    return caracteres;
  }

  public int getAmount() {
    return amount;
  }
}

public class Question33 {

  public static void main(String[] args) {
    final String word = "casa";

    List<Letter> letters = new ArrayList<Letter>();

    char[] wordSplited = word.toCharArray();

    System.out.println(wordSplited);
    for (char str : wordSplited) {
      for (Letter l : letters) {
        if (l != null && l.getCaracteres() == str) {
          l.setAmount(l.getAmount() + 1);
          continue;
        }
        l.setCaracteres(str);
        l.setAmount(1);
      }
    }

    for (Letter l : letters) {
      System.out.println(l.getCaracteres() + " = " + l.getAmount());
    }
  }
}
