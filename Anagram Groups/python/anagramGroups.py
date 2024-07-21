from collections import defaultdict
from typing import List

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagrams = defaultdict(list)

    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        
        anagrams[tuple(count)].append(s)

    return anagrams.values()

s = ["act","pots","tops","cat","stop","hat"]
print(groupAnagrams(s))