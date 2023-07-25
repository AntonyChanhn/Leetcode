# leetcode 15. 3Sum

[leetcode link](https://leetcode.com/problems/3sum/)

## 解題思路

## 重點

## Code

```typescript
const threeSum = (nums: number[]): number[][] => {
    let output:number[][] = [];
    let start:number, end:number;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        start = i + 1, end = nums.length - 1;

        if(nums[i] > 0) break;

        while(start < end) {
            if(nums[i] + nums[start] + nums[end] < 0) {
                start++;
            } else if(nums[i] + nums[start] + nums[end] > 0) {
                end--;
            } else {
                while(nums[start] == nums[start + 1]) start++;
                while(nums[end] == nums[end - 1]) end--;
                output.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
            }   
        }

        while(nums[i] == nums[i + 1]) i++;    
    }

    return output;
}
```
