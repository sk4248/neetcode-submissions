
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
hasDuplicate(nums){
if(nums.length < 2) return false
const map = {};
for(let char of nums){
    map[char] = map[char]+1 || 1;
}

for(let char in map){
    if(map[char] > 1){
        return true
    }
}

return false 
}

}