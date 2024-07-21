function groupAnagrams(strs) {
    var ans = new Map();
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var s = strs_1[_i];
        var count = Array(26).fill(0);
        for (var _a = 0, s_1 = s; _a < s_1.length; _a++) {
            var c = s_1[_a];
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        var key = count.toString();
        if (!ans[key])
            ans[key] = [];
        console.log(key);
        console.log(ans[key]);
        ans[key].push(s);
    }
    return Object.values(ans);
}
var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
