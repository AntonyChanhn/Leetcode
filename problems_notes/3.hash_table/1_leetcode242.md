# leetcode 242. Valid Anagram

[leetcode link](https://leetcode.com/problems/valid-anagram/)

## 解題思路

## 重點

## Code

使用Map

```typescript
const isAnagram = (s: string, t: string): boolean => {
    if(s.length != t.length) return false;
    let map:Map<string, number> = new Map<string, number>();

    for(let char of s){
        map.set(char, map.has(char) ? map.get(char)! + 1 : 1);
    }

    for(let char of t) {
        if(!map.get(char)) return false;
        map.set(char, map.get(char)! - 1);
    }

    return true;
};

使用array當作hash table

```typescript

```
```
