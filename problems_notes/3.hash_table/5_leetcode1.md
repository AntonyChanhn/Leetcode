# leetcode 1. Two Sum

[leetcode link](https://leetcode.com/problems/two-sum/)

## 解題思路

## 重點

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
