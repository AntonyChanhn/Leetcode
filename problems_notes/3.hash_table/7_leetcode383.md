# leetcode 383. Ransom Note

[leetcode link](https://leetcode.com/problems/ransom-note/)

## 解題思路

## 重點

## Code

使用hash table

```typescript
const canConstruct = (ransomNote: string, magazine: string): boolean => {
    let map:Map<string, number> = new Map<string, number>();

    for(let char of magazine) {
        map.set(char, map.has(char) ? map.get(char)! + 1 : 1);
    }

    for(let char of ransomNote) {
        if(map.get(char)) {
            map.set(char, map.get(char)! - 1);
        } else {
            return false;
        }
    }

    return true;
}
```

使用array作hash table

```typescript
const canConstruct = (ransomNote: string, magazine: string): boolean => {
    let arr:number[] = new Array(26).fill(0);

    for(let char of magazine) {
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let char of ransomNote) {
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        if(arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) return false;
    }

    return true;
}
```
