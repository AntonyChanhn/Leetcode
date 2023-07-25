# leetcode 15. 3Sum

[leetcode link](https://leetcode.com/problems/3sum/)

## 解題思路

雙指針法

先將nums小至大排序好,然後寫一個loop(for(let i = 0; i < nums.length; i++))用以歷遍nums。之後就可以定義雙指針的位置(start, end), start要指向i + 1的位置, end 指向nus.length - 1的位置。裹面再寫一個loop, 條件是start < end, 如果nums[i] + nums[start] + nums[end] < 0 代表start要向後移,因為start向後移, 三數相加會較大或一樣。反之nums[i] + nums[start] + nums[end] > 0 代表end要向前移。而如果nums[i] + nums[start] + nums[end] == 0 就可以將三個數放進output 的array 中,然後不要nums[start]及nums[end]相同的數值

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
