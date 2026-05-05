class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const elementMap = new Map();
        const finalArray = [];

        for (let i = 0; i < nums.length; i++) {
            elementMap.set(nums[i], (elementMap.get(nums[i]) ?? 0) + 1);
        }

        const sortmap = new Map([...elementMap].sort((a, b) => b[1] - a[1]));
        let count = 0;
        for (const [key] of sortmap.entries()) {
            if (finalArray.length === k) break;
            finalArray.push(key);
        }

        return finalArray;
    }
}
