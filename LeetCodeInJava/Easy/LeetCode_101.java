package Easy;

import utils.TreeNode;

public class LeetCode_101 {
    public boolean isSymmetric(TreeNode root) {

        if (root == null) {
            return true;
        }

        return isSameTree(root.left, root.right);
    }

    private boolean isSameTree(TreeNode nodeA, TreeNode nodeB) {
        if (nodeA == null && nodeB == null) {
            return true;
        }
        if (nodeA == null || nodeB == null) {
            return false;
        }

        if (nodeA.val != nodeB.val) {
            return false;
        }

        return isSameTree(nodeA.left, nodeB.right) && isSameTree(nodeA.right, nodeB.left);
    }
}
