package unidade02.interfaces;

public interface IMyListV1 <T> {
 
  void addFirst(T value);
  void addLast(T value);
  void addAfter(T dado, T crit);

  T peekFirst();
  T peekLast();
  
  T search(T crit);

  T removeFirst();
  T removeLast();
  T remove(T crit);
}