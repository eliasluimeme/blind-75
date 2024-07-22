function topFrequentKElement(nums: number[], k: number): number[] {
    const count = {}
    const freq = Array.from({ length: nums.length + 1 }, (): number[] => [])

    for (const n of nums)
        count[n] = (count[n] || 0) + 1
    console.log(count)
    for (const n in count)
        freq[count[n]].push(parseInt(n))
    console.log(freq)

    const res: number[] = []
    for (let i = freq.length - 1; i > 0; i--)
        for (const n of freq[i]) {
            res.push(n)
            if (res.length === k)
                return res
        }

    return []
}

console.log(topFrequentKElement([1, 1, 1, 2, 2, 3], 2))