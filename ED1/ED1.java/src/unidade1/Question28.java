package unidade1;

public class Question28 {

  public static void main(String[] args) {
    int[] nums = new int[] { 1, 5, 21, 3, 1 };

    int[] outPut = getBiggestAndSmallest(nums);

    for (int num : nums) {
      System.out.println(num);
    }

    System.out.println("O maior: " + outPut[1]);
    System.out.println("O menor: " + outPut[0]);
  }

  public static int[] getBiggestAndSmallest(int[] nums) {
    int biggest = 0;
    int smallest = 0;
    int[] outPut = new int[2];

    int countSmallest = 0;
    int countBiggest = 0;
    for (int num : nums) {
      for (int i = 0; i < nums.length; i++) {
        if (num <= nums[i]) {
          ++countSmallest;

          if (countSmallest == nums.length) {
            smallest = num;
          }
        }

        if (num >= nums[i]) {
          ++countBiggest;

          if (countBiggest == nums.length) {
            biggest = num;
          }
        }
      }
      countBiggest = 0;
      countSmallest = 0;
    }

    outPut[0] = smallest;
    outPut[1] = biggest;
    return outPut;
  }
}
