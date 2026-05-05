class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++) {
            let val = target - nums[i];
            let other = nums.indexOf(val, i + 1);
            if (other !== -1) {
                return [i, other].sort((a, b) => a - b);
            }
        }
    }
}
