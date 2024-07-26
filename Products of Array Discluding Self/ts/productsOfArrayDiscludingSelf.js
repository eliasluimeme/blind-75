function productExceptSelf(nums) {
    var result = [];
    var prefix = 1;
    var sufix = 1;
    for (var i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    for (var i = nums.length - 2; i >= 0; i--) {
        sufix *= nums[i + 1];
        result[i] *= sufix;
    }
    return result;
}
var nums = [1, 2, 4, 6];
console.log(productExceptSelf(nums));
