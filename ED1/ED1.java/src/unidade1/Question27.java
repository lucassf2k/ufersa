package unidade1;

public class Question27 {

  public static void main(String[] args) {
    int[] vetOfNums = { 0, 1, 2, 3, 4, 5 };

    System.out.println("Ordem padrão");
    for (int value : vetOfNums) {
      System.out.print(value + " ");
    }
    System.out.println();

    int[] newVetOfNums = reverseNums(vetOfNums);

    System.out.println("Ordem invertida");
    for (int value : newVetOfNums) {
      System.out.print(value + " ");
    }
    System.out.print("\n");
  }

  public static int[] reverseNums(int[] nums) {
    int[] reverseNums = new int[nums.length];

    int count = 0;
    for (int i = nums.length - 1; i >= 0; i--) {
      reverseNums[count] = nums[i];
      ++count;
    }

    return reverseNums;
  }
}
