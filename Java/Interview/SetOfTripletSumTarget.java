
import java.util.ArrayList;
import java.util.List;

public class SetOfTripletSumTarget {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 9, 10 };
        int target = 11;

        List<List<Integer>> outputList = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            int left = i + 1;
            int right = arr.length - 1;

            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];

                if (sum == target) {
                    outputList.add(List.of(arr[i], arr[left], arr[right]));
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        StringBuilder sb = new StringBuilder();

        for (List<Integer> triplets : outputList) {

            String str = triplets.toString();
            sb.append("(" + str + ") ,");

        }

        System.out.println(sb);

    }
}
