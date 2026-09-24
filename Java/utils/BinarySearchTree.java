package utils;

public class BinarySearchTree {

    private TreeNode root;

    public TreeNode getRoot() {
        return root;
    }

    // Add an element to the BST
    public void add(int value) {
        root = addRecursive(root, value);
    }

    private TreeNode addRecursive(TreeNode node, int value) {

        // If there is no node, create one
        if (node == null) {
            return new TreeNode(value);
        }

        // Smaller values go to the left
        if (value < node.val) {
            node.left = addRecursive(node.left, value);
        }

        // Greater values go to the right
        else if (value > node.val) {
            node.right = addRecursive(node.right, value);
        }

        // If value is equal, don't add duplicate
        return node;
    }
}