import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class LeetCode01TwoSum {
    public int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> map = new HashMap<>();

        int firstNum;
        int secondNum;

        for (int i = 0; i < nums.length; i++) {
            firstNum = nums[i];
            secondNum = target - firstNum;

            if (map.containsKey(secondNum)) {
                int secondNumIndex = map.get(secondNum);

                return new int[] { secondNumIndex, i };
            }

            map.put(firstNum, i);
        }

        return new int[] {};
    }
}
