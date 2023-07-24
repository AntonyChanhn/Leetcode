# leetcode 349. Intersection of Two Arrays

[leetcode link](https://leetcode.com/problems/intersection-of-two-arrays/)

## 解題思路

將nums1及nums2定義成set結構,之後再loop其中一個,比較另一個set中有沒有其數字,有就加到最後return的number array中。

## 重點

set也是hash table的其中一種, key同樣是不重複的,不過只有key 沒有value。

## Code

```typescript
const intersection = (nums1: number[], nums2: number[]): number[] => {
    let set1:Set<number> = new Set<number>(nums1),
        set2:Set<number> = new Set<number>(nums2);
    let output:number[] = [];

    for(let num of set2) {
        if(set1.has(num)) {
            output.push(num);
        }
    } 

    return output;
}
```
