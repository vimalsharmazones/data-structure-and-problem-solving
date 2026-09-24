package utils;

public class TreeDummyData {

    public static TreeNode getNodes() {
        BinarySearchTree bst = new BinarySearchTree();

        int[] values = {
                50, 25, 75, 10, 35,
                60, 90, 5, 15, 30,
                40, 55, 65, 80, 95,
                2, 7, 12, 18, 28,
                32, 38, 45, 52, 58,
                62, 68, 78, 85, 92,
                98, 1, 3, 6, 8,
                11, 14, 16, 20, 26,
                29, 34, 37, 42, 48, 54,
                57, 64, 70, 82
        };

        for (int value : values) {
            bst.add(value);
        }
        return bst.getRoot();
    }

}

// @formatter:off
/*
                              50
                    ┌─────────┴─────────┐
                   25                  75
              ┌─────┴─────┐       ┌─────┴─────┐
            10            35     60            90
          ┌─┴─┐         ┌─┴─┐   ┌─┴─┐        ┌─┴─┐
         5   15        30  40  55  65      80  95
        / \  / \       / \ / \ / \ / \     / \ / \
       2  7 12 18     28 32 38 45 52 58   78 85 92 98
      / \ / \ / \       \   \  \ /   / \     /  \ 
     1  3 6  8 11      29  34 37 42 48    54 57
                \                 \        / \
                14                 20     62 68
                                              / \
                                             64 70
                                                 \
                                                  82
*/