package unidade02.interfaces;

import unidade02.exception.MyException;

public interface IMyStack <T> {
  void push(T element) throws MyException; // emplhar
  T pop() throws MyException; // desempilhar
  T peek() throws MyException; // consulta o topo
  boolean isEmpty();
  boolean isFull();
}
