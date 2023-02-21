package unidade1;

public class Question29 {

  public static void main(String[] args) {
    int[] nums = new int[] { 1, 5, 6, 4, 10, 9 };

    // for (int num : moveToTop(nums)) {
    // System.out.println(num);
    // }

    for (int num : moveToTopFromIndex(nums, 3)) {
      System.out.println(num);
    }
  }

  // 29 default
  public static int[] moveToTop(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
      int oldNum = nums[(nums.length - 1) - i];
      nums[(nums.length - 1) - i] = nums[i == 0 ? 0 : (nums.length - 1) - i + 1];
      nums[i == 0 ? 0 : (nums.length - 2) - i + 1] = oldNum;
    }

    return nums;
  }

  // 29 modified
  public static int[] moveToTopFromIndex(int[] nums, int index) {
    for (int i = 0; i < index; i++) {
      int oldNum = nums[(index - 1) - i];
      nums[(index - 1) - i] = nums[i == 0 ? 0 : (index - 1) - i + 1];
      nums[i == 0 ? 0 : (index - 2) - i + 1] = oldNum;
    }

    return nums;
  }
}
