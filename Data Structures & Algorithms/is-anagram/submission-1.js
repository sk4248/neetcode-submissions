class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length !== t.length) return false
        const charMap1 = {};
        const charMap2 = {};
        for(let char of s){
            charMap1[char] =  charMap1[char]+1 || 1;
        }

        for(let char of t){
            charMap2[char] =  charMap2[char]+1 || 1;
        }

        for(let char in charMap1){
            if(!charMap2[char] || charMap1[char] !== charMap2[char]){
                return false
            }
        }
        return true


    }
}
