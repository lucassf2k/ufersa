package unidade1;

import java.util.List;

public class Question38 {

  public <T> String toString(T obj) {
    return "Object: " + obj;
  }
  

  public <E> void showVet(List<E> objs) {
    for (E obj : objs) {
      System.out.println(obj);
    }
  }
}
