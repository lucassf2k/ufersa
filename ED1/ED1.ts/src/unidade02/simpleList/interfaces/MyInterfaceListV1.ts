export interface MyInterfaceListV1<T> {
  addFirst(value: T): void;
  addLast(value: T): void;
  addAfter(dado: T, crit: T): void;
  peekFirst(): T | null;
  peekLast(): T | null;
  search(crit: T): T | null;
  removeFirst(): T | null;
  removeLast(): T | null;
  remove(crit: T): T | null;

  // optional
  show?: () => void;
  showReverse?: () => void;
}