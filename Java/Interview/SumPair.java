package Java.Interview;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SumPair {
    public static void main(String[] args) {
        int[] input = { 4, 7, 12, 15, 18, 21, 25, 30 };
        int target = 33;
        Set<Integer> set = new HashSet<>();

        List<int[]> output = new ArrayList<>();

        for (int i = 0; i < input.length; i++) {
            int first = input[i];
            int second = target - first;

            if (set.contains(second)) {
                output.add(new int[] { first, second });
            }
            set.add(first);
        }

        output.stream().forEach((outputArray) -> {
            Arrays.stream(outputArray).forEach(System.out::print);
            System.out.println();
        });

    }
}


