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
     * @return {boolean}
     */
depth(root){

  const stack = [[root, 1]];
  let maxDepth = 0;

  while(stack.length > 0){
    let [node, depth] = stack.pop();
    maxDepth = Math.max(depth, maxDepth);
    
    if(node.left) stack.push([node.left, depth+1]);
    if(node.right) stack.push([node.right, depth+1]);
  } 
  return maxDepth;
}

isBalanced(root) {
  if(root === null) return true;
  const queue = [];
  let node = root;
  queue.push(node);
  
  while(queue.length > 0){
    node = queue.shift();
    let leftDepth = 0;
    let rightDepth = 0;
    if(node.left){
      queue.push(node.left);
      leftDepth = this.depth(node.left)
    }
    if(node.right){
      queue.push(node.right);
      rightDepth = this.depth(node.right)
    }
    if(Math.abs(leftDepth - rightDepth) > 1){
      return false
    }
  }
  return true
    
}
}
