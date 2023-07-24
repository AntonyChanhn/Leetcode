# leetcode 1. Two Sum

[leetcode link](https://leetcode.com/problems/two-sum/)

## 解題思路

定義一個map, key and value都是number。用一個loop歷遍nums,定義一個變數為target減當前元素,如果map中有該變數的存在,代表當前的元素與曾經出現過的元素相加等如target,這樣就可以return 當前元素的index及map的value。如果map中沒有該變數的存在,就將該變數放進map中,key為該變數,value為該變數的index。

## Code

```typescript
const twoSum = (nums: number[], target: number): number[] => {
    let map:Map<number, number> = new Map<number, number>();
    let key:number;

    for(let i = 0; i < nums.length; i++) {
        key = target - nums[i];

        if(map.has(key)) {
            return [map.get(key)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}
```
