package unidade03;

public class Unid03 {


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

  public static void main(String[] args) {
    int[] vet = { 8, 5, 9, 2, 4, 6 };
    int[] alreadySorted = { 1, 2, 4, 5, 7, 9 };

    for (int element : alreadySorted) {
      System.out.print(element + " ");
    }

    System.out.println();

    bubbleSort(alreadySorted);
    // insertSort(alreadySorted);
    for (int element : alreadySorted) {
      System.out.print(element + " ");
    }
  }
  
}
