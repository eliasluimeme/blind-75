function containsDuplicate(nums) {
    var set = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (set.has(nums[i]))
            return true;
        else
            set.add(nums[i]);
    }
    return false;
}
// function containsDuplicate(nums: number[]): boolean {
//     const set = new Set(nums);
//     return set.size !== nums.length;
// };
var nums = [1, 2, 3, 7];
console.log(containsDuplicate(nums));
