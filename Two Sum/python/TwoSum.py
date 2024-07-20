from ast import List

def twoSum(nums: List[int], target: int) -> List[int]:
    prevmap = {} # val - index

    for i, n in enumerate(nums):
        remaining = target - n
        if remaining in prevmap:
            return [prevmap[remaining], i]
        prevmap[n] = i