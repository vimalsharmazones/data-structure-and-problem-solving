package utils;

import java.util.Arrays;
import java.util.stream.Collectors;

public class Print {

    public void printArray(int[] input) {
        String output = Arrays.stream(input).mapToObj((item) -> {
            return String.valueOf(item);
        }).collect(Collectors.joining(" -> "));

        System.out.println(output);
    }

    public void printArray2(int[] input) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < input.length; i++) {
            sb.append(input[i]);
            if (i < (input.length - 1)) {
                sb.append(" --> ");
            }
        }
        System.out.println(sb);
    }

    public void printTree(TreeNode node) {

    }
}
