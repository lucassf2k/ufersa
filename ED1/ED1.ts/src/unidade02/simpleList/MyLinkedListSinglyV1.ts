import { MyInterfaceListV1 } from './interfaces/MyInterfaceListV1';


class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class MyLinkedListSinglyV1<T> implements MyInterfaceListV1<T> {
  
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;


  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  show(): void {
    let p: Node<T> | null = this.head;

    if (p === null) {
      console.log('LISTA VAZIA');
    } else {
      while (p !== null) {
        console.log(`Dado: ${p.data}`);
        p = p.next;
      }
    }

    console.log(`size = ${this.size}`);
  }

  showReverse(): void {
    console.log('Ops! Esta é uma lista simplesmente encadeada');
    console.log(`size = ${this.size}`);
  }

  addFirst(dado: T): void {
    let newElement = new Node<T>(dado);

    if (this.head === null) {
      this.head = newElement;
      this.tail = newElement;
    } else {
      newElement.next = this.head;
      this.head = newElement;
    }

    this.size++;
  }

  addLast(dado: T): void {
    let newElement = new Node<T>(dado);

    if (this.head === null) {
      this.head = newElement;
      this.tail = newElement;
    } else {
      if (this.tail === null) return;
      this.tail.next = newElement;
      this.tail = newElement;
    }

    this.size++;
  }

  addAfter(dado: T, crit: T): void {
    let p: Node<T> | null = this.searchNode(crit);

    if (p === null) {
      console.log('Critério inválido');
    } else {
      let newElement = new Node<T>(dado);
      
      if (p.next === null) {
        this.tail = newElement;
      }

      newElement.next = p.next;
      p.next = newElement;

      this.size++;
    }
  }

  peekFirst(): T | null {
    if (this.head === null) {
      console.log('Lista Vazia!');
      return null;
    } else {
      return this.head.data;
    }
  }

  peekLast(): T | null {
    if (this.tail === null) {
      console.log('Lista Vazia!!');
      return null;
    } else {
      return this.tail.data;
    }
  }

  search(crit: T): T | null {
    const p: Node<T> | null = this.searchNode(crit);

    if (p === null) {
      return null;
    } else {
      return p.data;
    }
  }

  removeFirst(): T | null {
    let p: Node<T> | null = this.head;
    let dataReturn: T | null = null;

    if (this.head === null) {
      console.log('Lista Vazia!');
    } else {
      dataReturn = this.head.data;

      if (this.head === this.tail) {
        console.log('Remove único elemento');
        this.head = null;
        this.tail = null;
      } else {
        console.log('Remove o primeiro elemento, mas ainda há outros');
        this.head = this.head.next;
      }

      if (p !== null) {
        p.next = null;
      }

      this.size--;
    }

    return dataReturn;
  }

  removeLast(): T | null {
    let dataReturn: T | null = null;

    if (this.tail === null) {
      console.log('Lista Vazia!');
      return null;
    } else {
      dataReturn = this.tail.data;

      if (this.head === this.tail) {
        console.log('Remove único elemento!');
        this.head = null;
        this.tail = null;
      } else {
        console.log('Remove último elemento, mas ainda há outros');
        let p: Node<T> | null = this.head;

        while (p!.next !== this.tail) {
          p = p!.next;
        }

        this.tail = p;
        this.tail!.next = null;
      }

      this.size--;
    }

    return dataReturn;
  }

  remove(crit: T): T | null {
      
  }

  private searchBefore(crit: T): Node<T> | null {
    let p: Node<T> | null = this.head;
    let previus: Node<T> | null = null;

    while (p !== null) {
      previus = p;
      p = p.next;

      if (p !== null && p.data === crit) {
        return previus;
      }
    }

    return null;
  }

  private searchNode(crit: T): Node<T> | null {
    let p: Node<T> | null = this.head;

    while (p !== null) {
      if (p.data === crit) {
        return p;
      }
      p = p.next;
    }

    return null;
  }
}