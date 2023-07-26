# leetcode 18. 4Sum

[leetcode link](https://leetcode.com/problems/4sum/)

## 解題思路

## 重點

## Code

```typescript
const fourSum = (nums: number[], target: number): number[][] => {
    let output:number[][] = [];
    let start:number, end:number;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 3; i++) {
        if(nums[i] > target && target > 0) break;

        for(let j = i + 1; j < nums.length - 2; j++ ) {
            if(nums[i] + nums[j] > target && target > 0) break;
            
            start = j + 1, end = nums.length - 1;
            while(start < end) {
                if(nums[i] + nums[j] + nums[start] + nums[end] < target) {
                    start++;
                } else if(nums[i] + nums[j] + nums[start] + nums[end] > target) {
                    end--;
                } else {
                    output.push([nums[i], nums[j], nums[start], nums[end]]);
                    while(nums[start] == nums[start + 1]) start++;
                    while(nums[end] == nums[end - 1]) end--;
                    start++;
                    end--;
                }
            }

            while(nums[j] == nums[j + 1]) j++;
        }

        while(nums[i] == nums[i + 1]) i++;
    }

    return output;
}
```
