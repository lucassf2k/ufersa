package unidade02.interfaces;

import unidade02.exception.MyException;

public interface IMyQueue <T> {
  void add(T element) throws MyException; // adiciona ao final
  T remove() throws MyException; // remove do final
  T peek() throws MyException; // consulta do início
  boolean isEmpty();
  boolean isFull();
}
