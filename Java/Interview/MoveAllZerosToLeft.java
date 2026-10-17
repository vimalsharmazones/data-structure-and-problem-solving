package Java.Interview;

import java.util.Arrays;

public class MoveAllZerosToLeft {
    public static void main(String[] args) {

        int[] input1 = { 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 9, 0, 10, 0, 0, 0 };

        int index1 = 0;

        for (int i = 0; i < input1.length; i++) {
            if (input1[i] != 0) {
                input1[index1] = input1[i];
                ++index1;
            }
        }

        for (int i = index1; i < input1.length; i++) {
            input1[i] = 0;
        }

        Arrays.stream(input1).forEach(System.out::print);

        int[] input2 = { 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 9, 0, 10, 0, 0, 0 };
        int index2 = input2.length - 1;

        for (int i = index2; i > -1; i--) {
            if (input2[i] != 0) {
                input2[index2] = input2[i];
                --index2;
            }
        }

        for (int i = index2; i > -1; i--) {
            input2[i] = 0;
        }

        System.out.println();
        Arrays.stream(input2).forEach(System.out::print);
    }
}
