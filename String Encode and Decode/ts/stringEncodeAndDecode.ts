function encode(strs: string[]): string {
    let res = ""
    for (const s of strs)
        res += `${s.length}#${s}`

    return res
}

function decode(s: string): string[] {
    const res: string[] = []
    let i = 0
    let j = 0

    while (i < s.length) {
        while (s[j] != "#") j++;
        const len = parseInt(s.substring(i, j))
        i = j + 1
        j = i + len
        res.push(s.substring(i, j))
        i = j
    }

    return res
}

const strs = ["neet","code","love","you"]
console.log(decode(encode(strs)))