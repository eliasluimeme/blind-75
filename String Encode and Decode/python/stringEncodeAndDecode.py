from typing import List


def encode(strs: List[str]) -> str:
    res = ""
    for s in strs:
        res += str(len(s)) + "#" + s
    
    return res


def decode(s: str) -> List[str]:
    res = []
    i, j = 0, 0

    while i < len(s):
        while s[j] != '#':
            j += 1
        length = int(s[i:j])
        i = j + 1
        j = i + length
        res.append(s[i:j])
        i = j

    return res

strs = ["neet","code","love","you"]
print(decode(encode(strs)))