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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p && !q) return false;
        if(!p && q) return false;
        if(!p && !q) return true;
        const q1 = [p];
        const q2 = [q];
        let node1;
        let node2;
        while(q1.length > 0 || q2.length > 0){
            node1 = q1.shift();
            node2 = q2.shift();
            if(node1.val !== node2.val){
                return false;
            }
            if(node1.left && node2.left){
                q1.push(node1.left);
                q2.push(node2.left);
            } else if (node1.left && !node2.left){
                return false
            } else if (!node1.left && node2.left){
                return false
            }

            if(node1.right && node2.right){
                q1.push(node1.right);
                q2.push(node2.right);
            } else if (node1.right && !node2.right){
                return false
            } else if (!node1.right && node2.right){
                return false
            }
        }
        return true;
        
    }
}
