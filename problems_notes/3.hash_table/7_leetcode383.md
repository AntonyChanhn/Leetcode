# leetcode 383. Ransom Note

[leetcode link](https://leetcode.com/problems/ransom-note/)

## 解題思路

使用hash table

定義一個hash table,用一個loop將magazine的每個字母都放進hash table中,key為字母,value為出現的次數。再用一個loop歷遍ransomNote,對一對ransomNote的字母有沒有出現在hash table中,如果有就將對應的value減一,如果沒有出現或對應的value為零就return false。最後return true。

使用array作hash table

定義一個長度為26且每個值都為0的number array。用一個loop將magazine的字母及出現的次數放入array中(放入的方法[這裹](https://github.com/AntonyChanhn/Leetcode/blob/main/problems_notes/3.hash_table/1_leetcode242.md)有提及)。之後再用一個loop將ransomNote對應在array的位置的數值減一,然後再判斷該數值是否小於零,如果是就return false。最後return true。

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
