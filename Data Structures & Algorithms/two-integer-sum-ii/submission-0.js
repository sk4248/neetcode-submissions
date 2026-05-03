class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length-1;
        
        while(j>i){
            let sum = numbers[i] + numbers[j]
            console.log(sum, i, j)
            if(sum === target) {
            return [i+1, j+1]
            } else if( sum > target){
                j--;
            } else {
                i++;
            }
        }
    }
}
