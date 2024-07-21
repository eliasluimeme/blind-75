function groupAnagrams(strs: string[]): string[][] {
    const ans = new Map<string, string[]>();

    for (const s of strs) {
        const count = Array(26).fill(0);

        for (const c of s)
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

        const key = count.toString();

        if (!ans[key])
            ans[key] = [];

        ans[key].push(s);
    }

    return Object.values(ans);
}

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))