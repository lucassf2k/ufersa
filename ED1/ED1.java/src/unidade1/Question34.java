package unidade1;

import java.util.ArrayList;
import java.util.List;

class Word {
  private String word;
  private int qtd = 0;
  
  public Word(String word) {
    this.word = word;
    this.qtd++;
  }
  public Word() {
  }

  public void increment() {
    this.qtd++;
  }

  public String getWord() {
    return word;
  }
  public void setWord(String word) {
    this.word = word;
  }
  public int getQtd() {
    return qtd;
  }
  public void setQtd(int qtd) {
    this.qtd = qtd;
  }
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((word == null) ? 0 : word.hashCode());
    return result;
  }
  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Word other = (Word) obj;
    if (word == null) {
      if (other.word != null)
        return false;
    } else if (!word.equals(other.word))
      return false;
    return true;
  }
}

class ListWords {
  private static List<Word> db = new ArrayList<Word>();

  public Boolean findWord(Word word) {
    for (Word w : db) {
      if (w.equals(word)) {
        w.increment();
        return true;
      } else {
        continue;
      }
    }

    return false;
  }

  public void show() {
    for (Word w : db) {
      System.out.println(w.getWord() + " = " + w.getQtd());
    }
  }

  public void add(Word word) {
    db.add(word);
  }
}

public class Question34 {

  public static void main(String[] args) {
    String inputOut = "estude muito sempre sempre estude";
    
    String[] words = inputOut.split(" ");

    ListWords list = new ListWords();


    for (String str : words) {
      Word word = new Word(str);
      if (list.findWord(word)) {
        continue;
      }
      list.add(word);
    }

    list.show();
  }
}
