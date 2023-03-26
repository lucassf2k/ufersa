package unidade02;

import unidade02.exception.MyException;
import unidade02.interfaces.IMyStack;

public class MyStack <T> implements IMyStack <T> {

 private int size;
 private Object[] stack;
 private int top;

 public MyStack(int size) {
  this.top = -1;
  this.size = size;
  this.stack = new Object[this.size];
 }
  
 public void push(T element) throws MyException
 {
    if (this.isFull()) {
      throw new MyException("ERROR: Pilha cheia!");
    }

    this.top = (this.top + 1);
    this.stack[this.top] = element;
 }

 @SuppressWarnings("unchecked")
 public T pop() throws MyException
 {
    T elementOfReturn;

    if (this.isEmpty()) {
      throw new MyException("ERROR: Pilha vazia!");
    }

    elementOfReturn = (T) this.stack[this.top];
    this.top = (this.top - 1);

    return elementOfReturn;
 }

 @SuppressWarnings("unchecked")
 public T peek() throws MyException
 {
    if (this.isEmpty()) {
      throw new MyException("ERROR: Pilha vazia!");
    }

    T elementOfReturn;

    elementOfReturn = (T) this.stack[this.top];
    this.top = (this.top - 1);

    return elementOfReturn;
 }

 public boolean isEmpty()
 {
  if (this.top == -1) {
    return true;
  } else {
    return false;
  }
 }

 public boolean isFull()
 {
  if (this.top == (this.size - 1)) {
    return true;
  } else {
    return false;
  }
 }
}
