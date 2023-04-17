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

  public static void main(String[] args) {
    int[] vet = { 8, 5, 9, 2, 4, 6 };

    for (int element : vet) {
      System.out.print(element + " ");
    }

    System.out.println();

    bubbleSort(vet);
    for (int element : vet) {
      System.out.print(element + " ");
    }
  }
  
}
