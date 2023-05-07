package unidade03;

public class Unid03 {

  public static int searchLinear(int[] arr, int key) {
    int result = -1;

    for (int i = 0; i < arr.length; i++) {
      if (key == arr[i]) {
        result = i;
      }
    }

    return result;
  }

  public static int binarySearch(int[] arr, int key) {
    int start = 0;
    int end = arr.length - 1;
    int result = -1;

    while (start <= end) {
      int middle = (start + end) / 2;

      if (key < arr[middle]) {
        end = middle - 1;
      } else if (key > arr[middle]) {
        start = middle + 1;
      } else {
        result = middle;
        start = arr.length;
      }
    }
    
    return result;
  }

  public static void bubbleSort(int[] arr) {
    int size = arr.length;

    for (int j = 0; j < size-1; j++) {
      for (int i = 0; i < size-1; i++) {
       if (arr[i] > arr[i+1]) {
        int tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
       }
      }
    }
  }

  public static void insertSort(int[] arr) {
    int size = arr.length;

    for (int i = 1; i < size; i++) {
      int key = arr[i];
      int j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j--;
      }

      arr[j+1] = key;
    }

  }

  public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      int smaller = i;

      for (int j = i+1; j < arr.length - 1; j++) {
        if (arr[j] < arr[smaller]) {
          smaller = j;
        } 
      }

      if (i != smaller) {
        int tmp = arr[i];
        arr[i] = arr[smaller];
        arr[smaller] = tmp;
      }
    }
  }

  public static void quickSort(int[] arr, int start, int end) {
    int i = start;
    int j = end;
    int indexPivo = (start + end) / 2;
    int pivo = arr[indexPivo];

    while (i < j) {
      while (arr[i] < pivo) {
        i = i + 1;
      }

      while (arr[j] > pivo) {
        j = j - 1; 
      }

      if (i <= j) {
        int aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
        i++;
        j--;
      }
    }

    if (j > start) {
      quickSort(arr, start, j);
    }

    if (i < end) {
      quickSort(arr, i, end);
    }
  }

  public static void shellSort(int[] arr) {}

  public static void main(String[] args) {
    int[] vet = { 8, 5, 9, 2, 4, 6 };
    int[] alreadySorted = { 1, 2, 4, 5, 7, 9 };

    for (int element : vet) {
      System.out.print(element + " ");
    }

    System.out.println();

    quickSort(vet, 0, (vet.length - 1));
    // insertSort(alreadySorted);
    for (int element : alreadySorted) {
      System.out.print(element + " ");
    }
  }
  
}
