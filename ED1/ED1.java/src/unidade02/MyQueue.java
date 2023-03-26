package unidade02;

import unidade02.exception.MyException;
import unidade02.interfaces.IMyQueue;

public class MyQueue <T> implements IMyQueue <T> 
{
 
    private int size;
    private Object[] queue;
    private int first;
    private int last;

    public MyQueue(int size) {
        this.first = -1;
        this.last = -1;
        this.size = size;
        this.queue = new Object[this.size];
    }

    public void add(T value) throws MyException 
    {
        int lastTemp = (last + 1) % this.size;

        if (lastTemp == this.first) {
            throw new MyException("ERROR: fila cheia!!");
        }

        this.last = lastTemp;
        this.queue[this.last] = value;

        if (this.first == -1) {
            this.first = 0;
        }
    }

    @SuppressWarnings("unchecked")
    public T remove() throws MyException
    {
        T elementOfReturn;

        if (this.first == -1) {
            throw new MyException("ERROR: fila vazia!!");
        }

        elementOfReturn = (T) this.queue[this.first];

        if (this.first == this.last) {
            this.first = -1;
            this.last = -1;
        } else {
            this.first = (this.first + 1) % this.size;
        }

        return elementOfReturn;
    }

    @SuppressWarnings("unchecked")
    public T peek() throws MyException
    {
        T elementOfReturn;

        if (this.first == -1) {
            throw new MyException("ERROR: fila vazia!");
        }

        elementOfReturn = (T) this.queue[this.first];

        return elementOfReturn;
    }

    public boolean isFull() {
        int lastTemp = (this.last + 1) % this.size;

        if (lastTemp == this.first) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isEmpty() {
        if (this.first == -1) {
            return true;
        } else {
            return false;
        }
    }

}
