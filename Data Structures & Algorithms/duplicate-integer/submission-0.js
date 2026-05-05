class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = new Map();

        for (let i = 0; i < nums.length; i++) {
            if(dup.has(nums[i])) {
                return true
            } else {
                dup.set(nums[i], dup.get(nums[i] + 1))
            }
        }

        return false;
    }
}
