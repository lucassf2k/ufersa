package unidade02;

import unidade02.interfaces.IMyListV1;

public class MyLinkedListSingly <T> implements IMyListV1 <T> {
  
  class Node {
    T data;
    Node next;

    public Node(T data) {
      this.data = data;
      this.next = null;
    }
  }

  private Node head;
  private Node tail;
  public int size;

  public MyLinkedListSingly() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public void addFirst(T dado) {
    Node newNode = new Node(dado);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  public void addLast(T dado) {
    Node newNode = new Node(dado);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  public void addAfter(T dado, T crit) {
    Node p = this.searchNode(crit);

    if (p == null) {
      System.out.println("Crit is invalid!");
    } else {
      Node newNode = new Node(dado);

      if (p.next == null) {
        this.tail = newNode;
      }

      newNode.next = p.next;
      p.next = newNode;

      this.size++;
    }
  }

  public T peekFirst() {
    if (this.head == null) {
      System.out.println("Lista vazia!!");
      return null;
    } else {
      return this.head.data;
    }
  }

  public T peekLast() {
    if (this.tail == null) {
      System.out.println("Lista  Vazia!");
      return null;
    } else {
      return this.tail.data;
    }
  }

  public T removeFirst() {
    Node p = this.head;
    T elementOfReturn = null;

    if (this.head == null) {
      System.out.println("Lista Vazia!!");
    } else {
      elementOfReturn = this.head.data;

      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }

      p.next = null;
      this.size--;
    }

    return elementOfReturn;
  }

  public T removeLast() {
    T elementOfReturn = null;

    if (this.tail == null) {
      System.out.println("Lista Vazia!");
      return null;
    } else {
      elementOfReturn = this.tail.data;

      if (this.head == this.tail) {
        System.out.println("Remove unico elemento");
        this.head = null;
        this.tail = null;
      } else {
        Node p = this.head;

        while(p.next != this.tail) {
          p = p.next;
        }

        this.tail = p;
        this.tail.next = null;
      }

      this.size--;
    }

    return elementOfReturn;
  }

  public T remove(T crit) {
    Node before = null;
    Node removed = null;

    if (this.head == null) {
      System.out.println("Lista vazia!");
      return null;
    } 

    before = this.searchNode(crit);

    if (before == null) {
      if (this.head.data.equals(crit) == false) {
        System.out.println("Crit does not exists!");
        return null;
      } else {
        return this.removeFirst();
      }
    } else {
      removed = before.next;

      if (removed == this.tail) {
        System.out.println("Remove o ultimo!");
        return this.removeLast();
      } else {
        System.out.println("Remove meio");
        before.next = removed.next;
        removed.next = null;
        this.size++;

        return removed.data;
      }
    }
  }

  public Node searchNode(T crit) {
    Node p = this.head;

    while(p != null) {
      if (p.data.equals(crit)) {
        return p;
      }

      p = p.next;
    }

    return null;
  }

  public T search(T crit) {
    Node p = this.searchNode(crit);

    if (p == null) {
      return null;
    } else {
      return p.data;
    }
  }

}
