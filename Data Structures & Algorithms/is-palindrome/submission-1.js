class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        console.log(string);
        let i=0;
        let j=string.length-1;
        while(j>i){
            if(string[i] === string[j]){
                i++;
                j--;
            }else{
                return false
            }
        }
        return true;
    }
}
