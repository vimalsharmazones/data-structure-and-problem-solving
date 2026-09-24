package tree.Traversals;

import java.util.ArrayDeque;
import java.util.Queue;

import utils.TreeDummyData;
import utils.TreeNode;

public class Traversals {

    public static void inorderTraversal(TreeNode node, ActionOnTreeNode action) {
        if (node == null) {
            return;
        }

        inorderTraversal(node.left, action);
        action.action(node);
        inorderTraversal(node.right, action);
    }

    public static void preorderTraversal(TreeNode node, ActionOnTreeNode action) {
        if (node == null) {
            return;
        }

        action.action(node);
        preorderTraversal(node.left, action);
        preorderTraversal(node.right, action);
    }

    public static void postorderTraversal(TreeNode node, ActionOnTreeNode action) {
        if (node == null) {
            return;
        }

        postorderTraversal(node.left, action);
        postorderTraversal(node.right, action);
        action.action(node);
    }

    public static void breadthFirstTraversal(TreeNode node, ActionOnTreeNode action) {
        if (node == null) {
            return;
        }

        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.offer(node);

        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();

            action.action(current);

            if (current.left != null) {
                queue.offer(current.left);
            }

            if (current.right != null) {
                queue.offer(current.right);
            }
        }
    }

    public static void main(String[] args) {
        TreeNode root = TreeDummyData.getNodes();

        StringBuilder sb1 = new StringBuilder();

        inorderTraversal(root, (item) -> {
            sb1.append(item.val + " ->");
        });

        System.out.println("Inorder");
        System.out.println(sb1.toString());

        StringBuilder sb2 = new StringBuilder();

        breadthFirstTraversal(root, (item) -> {
            sb2.append(item.val + " ->");
        });

        System.out.println("BFT");
        System.out.println(sb2.toString());
    }

}
