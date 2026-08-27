/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        // try to find the left depth and right depth at every node
        function depth(node){
            if(node === null) return 0;
            const stack = [[node,1]];
            let maxDepth = 0
            while(stack.length > 0){
                let [node, depth] = stack.pop();
                maxDepth = Math.max(maxDepth, depth);
                if(node.left) stack.push([node.left, depth+1]);
                if(node.right) stack.push([node.right, depth+1])
            }
            return maxDepth;
        }
        if(root === null) return 0;
        const queue = [];
        let node = root;
        let maxDiameter = 0;
        queue.push(node);
        while(queue.length > 0){
            node = queue.shift();
            let leftDepth = 0;
            let rightDepth = 0;
            if(node.left) {
            leftDepth = depth(node.left);
            queue.push(node.left)
            }
            if(node.right) {
            rightDepth = depth(node.right);
            queue.push(node.right)
            }
            console.log(leftDepth, rightDepth)
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)
        }
        return maxDiameter;
    }
}
