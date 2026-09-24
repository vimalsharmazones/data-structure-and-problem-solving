package Easy;

import java.util.ArrayList;
import java.util.List;

import utils.Print;

public class LeetCode_118 {
    public static List<List<Integer>> generate(int numRows) {

        List<List<Integer>> list = new ArrayList<>();

        if (numRows >= 1) {
            list.add(List.of(1));
        }

        for (int i = 1; i < numRows; i++) {
            List<Integer> previousList = list.get(i - 1);

            List<Integer> currentList = new ArrayList<>();
            currentList.add(1);

            for (int j = 0; j < i - 1; j++) {
                int nextValue = previousList.get(j) + previousList.get(j + 1);

                currentList.add(nextValue);
            }

            currentList.add(1);
            list.add(currentList);

        }

        for (List<Integer> innerList : list) {

            Print.PrintList(innerList);

        }

        return list;
    }

    public static void main(String[] args) {
        generate(5000);
    }
}
