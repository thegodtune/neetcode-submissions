class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length <= 1) {
            return [strs];
        }

        const resultArray = [];
        const scoreMap = {};

        for (let i = 0; i < strs.length; i++) {
            let toArray = strs[i].split('');
            let key = toArray.sort().join('');
            if (scoreMap[key]) {
                scoreMap[key].push(strs[i]);
            } else {
                scoreMap[key] = [strs[i]];
            }
        }

        for (let i in scoreMap) {
            resultArray.push(scoreMap[i]);
        }

        return resultArray;
    }
}