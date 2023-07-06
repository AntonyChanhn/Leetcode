# 雙指針法(滑動窗口)

## leetcode 209. Minimum Size Subarray Sum

[leetcode link](https://leetcode.com/problems/minimum-size-subarray-sum/)

## 解題思路

暴力解法就是兩個 loop,外面的 loop 歷遍數組,裹面的 loop 尋找符合條件的數組。但此題有更優解,就是滑動窗口(也是雙指針法一種)。

定義兩個指針如start and end,一開始同時指向數組的開端,以end獲取數組的值,獲取到的值以變數sum儲存。

如果sum小於target,那end向後移。

如果sum大於target,那將窗口長度(也就是子數組長度:end - start + 1)比較變數output(一開始給output一個不可能超越的值如:nums.length + 1 or Math.Max()),取較小的值=output,之後再將sum - nums[start],同時將start++。

## 重點

雙指針法的重點一直都是如何控制指針,而滑動窗口也是雙指針法的一種,不過滑動窗口的兩個指針中間的子數組(也就是所謂的窗口)是有意義的,需要用到的,所以才叫滑動窗口。

這題的重點也是如何移動窗口(子數組)的頭及尾端,並將當前窗口(子數組)內的值以sum儲存。

如果當前窗口(子數組)內的值(sum)大於target,那窗口(子數組)就要縮小,也就是窗口(子數組)的頭端向後移動

如果當前窗口(子數組)內的值(sum)小於target,那窗口(子數組)的尾端向後移動繼續歷編數組。

## Code

滑動窗口
```typescript
const minSubArrayLen = (target: number, nums: number[]): number  => {
    let sum:number = 0, fast:number = 0, slow:number = 0, output:number = nums.length + 1;
    while(fast < nums.length){
        sum += nums[fast];
        if(sum >= target ) {            
            output = output > fast - slow + 1 ? fast - slow + 1 : output
            sum = sum - nums[slow] - nums[fast];
            slow++;
        }else {
            fast++;
        }
    }

    return output == nums.length + 1 ? 0 : output
};
```
