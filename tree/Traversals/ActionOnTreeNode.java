package tree.Traversals;

import utils.TreeNode;

@FunctionalInterface
public interface ActionOnTreeNode {
    public void action(TreeNode node);
}