# leetcode 1002. Find Common Characters

[leetcode link](https://leetcode.com/problems/find-common-characters/)

## 解題思路

使用hash table(map)

用兩個loop 歷遍string array,取每個字母。將字母放入map中,key為字母,value為長度是string array長度的number array,該number array代表該字母在string array的那個index中出現了多少次。
之後再用一個loop歷遍map,將value中的number array取其最小的數字,然後再用一個loop,將字母放進空的string array中,要放多少次最決於value中的number array其最小的數字。

使用array 作hash table

定義兩個長度為26且每個值都為0的number array(fristArr,otherArr), 用一個loop將string array的第一個元素的字母及出現的次數放入fristArr(放入的方法[這裹](https://github.com/AntonyChanhn/Leetcode/blob/main/problems_notes/3.hash_table/1_leetcode242.md)有提及)

## 重點

## Code

使用hash table
```typescript
const commonChars = (words: string[]): string[] => {
    let output:string[] = [];
    let map:Map<string, number[]> = new Map<string, number[]>();

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if(map.has(words[i][j])) {
                map.get(words[i][j])![i]++;
            } else {
                map.set(words[i][j], new Array(words.length).fill(0))
                map.get(words[i][j])![i]++;
            }
        }
    }

    for (let [key, val] of map) {
        let loop = val.reduce((pre,curr) => pre < curr ? pre : curr, Number.MAX_VALUE);

        while(loop--){
            output.push(key);
        }
    }

    return output;
}
```

使用array 作hash table

```typescript
const commonChars = (words: string[]): string[] => {
    let output:string[] = [];
    let fristArr:number[] = new Array(26).fill(0),
        otherArr:number[] = new Array(26).fill(0);

    for(let char of words[0]) {
        fristArr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for(let i = 1; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            otherArr[words[i][j].charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        for(let k = 0; k < 26; k++) {
            fristArr[k] = fristArr[k] < otherArr[k] ? fristArr[k] : otherArr[k];
        }

        otherArr.fill(0);
    }

    for(let i = 0; i < 26; i++) {
        while(fristArr[i]--) {
            output.push(String.fromCharCode("a".charCodeAt(0) + i));
        }
    }

    return output;
};
```
