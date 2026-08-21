/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const items = [];
        let current = head;
        while(current !== null){
         
            if(items.includes(current)){
                return true;
            } else{
            items.push(current);
            current = current.next;
            }
        }

        return false
    }
}
