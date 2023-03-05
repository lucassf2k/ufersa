package unidade1;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.TreeSet;
import java.util.Vector;

public class Question41 {
  // a) 
  // ArrayList
  public static void UsingArrayList() {
    // Ele preserva a ordem que vc adiciona os elementos
    // Ele tem um tamanho automático de 10 e vai crescento 50% quando encher
    List<String> example = new ArrayList<String>();
    example.add("Cachoro");
    example.add("Cato");
    example.add("Calinha");

    for (String str : example) {
      System.out.println(str + ", ");
    }

    example.set(2, "Galinha");
    example.remove(0);

    for (String str : example) {
      System.out.println(str + ", ");
    }
  }

  public static void UsingVector( ) {
    // ele também preserva a ordem de adição
    // ele começa com 10 e cresce 100%
    // e só uma thread por vez pode acessa-lo
    List<Integer> example = new Vector<Integer>();

    example.add(0);
    example.add(1);
    example.add(5);

    for (Integer i : example) {
      System.out.println(i + ", ");
    }

    example.set(0, 8);

    System.out.println(example.size());
  }

  public static void UsingLinkedList() {
    // Elementos não são guardados de forma sequêncial na memória
    // Cada elemento guarda o index o anterio e do posterior assim dando uma melhor desempenho a: add and remove
    List<Double> example = new LinkedList<Double>();
    example.add(0.58);
    example.add(5.5);

    example.remove(0);

    for (Double d : example) {
      System.out.println(d + ", ");
    }
  }
  // b)
  public static void usingHashSet() {
    // elementos não são ordenados
    // não permite adicionar elemento iguais, as quais são comparaveis em UM terminado OBJECT
    Set<String> example = new HashSet<String>();
    example.add("null");
    example.add("Olá");
    example.add("Olá");

    for (String str : example) {
      System.out.println(str + " ");
    }

    example.remove("Olá");
  }

  public static void usingTreeSet() {
    // elementos em forma de arvore
    Set<Double> example = new TreeSet<Double>();

    example.add(88.58);
    example.add(88.82);

    example.remove(88.82);

    for (Double d : example) {
      System.out.println(d + " ");
    }
  }

  public static void usingLinkedHasSet() {
    // Única diferênça eh que mantêm a ordem de inserção
    Set<String> example = new LinkedHashSet<String>();

    example.add("Olá");
    example.add("Nissan GTR35");

    for (String str : example) {

      System.out.println(str + " ");
    }
  }
  // c)
  public static void usingQueueLinkedList() {
    // Mesmo LinkedList
    // Ordem de adicionar é respeitada

    LinkedList<String> example = new LinkedList<String>();

    example.add("null");
    example.add("Nissan 370z");
    example.add("Mazda RX7");

    String str = new String(example.peek());
    System.out.println(str);

    for (String srt : example) {
      System.out.println(srt);
    }
  }

  public static void usingQueuePriorityQueue() {
    // mantẽm do (compareTo)
    // Não permite (null)

    PriorityQueue<String> example = new PriorityQueue<String>();

    example.add("null");
    example.add("null22");
    example.add("null222");

    example.remove("null");

    for (String str : example) {
      System.out.println(str);
    }
  }
  // d)
  public static void usingDequeLinkedList() {
    // é o mesmo LinkedList

    LinkedList<String> example = new LinkedList<String>();

    example.addFirst("Bem vinso");
    example.addFirst("Olá, ");

    System.out.println("peek: " + example.peek());
    

    System.out.println("pop: " +  example.pop());

    for (String str : example) {
      System.out.println(str + " ");
    }
  
  }

  public static void main(String[] args) {
    usingDequeLinkedList();
    usingHashSet();
    usingLinkedHasSet();
    usingQueueLinkedList();
    usingTreeSet();
    UsingArrayList();
    UsingLinkedList();
    UsingVector();
  }
}
