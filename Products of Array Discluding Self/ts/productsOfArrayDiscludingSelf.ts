function productExceptSelf(nums: number[]): number[] {
    const result: number[] = []
    let prefix: number = 1
    let sufix: number = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        sufix *= nums[i + 1]
        result[i] *= sufix
    }

    return result
}

const nums = [1,2,4,6]
console.log(productExceptSelf(nums))