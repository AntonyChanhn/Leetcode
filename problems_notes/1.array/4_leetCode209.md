# 雙指針法(滑動窗口)

## leetcode 209. Minimum Size Subarray Sum

[leetcode link](https://leetcode.com/problems/minimum-size-subarray-sum/)

## 解題思路

暴力解法就是兩個 loop,外面的 loop 歷遍數組,裹面的 loop 尋找符合條件的數組。但此題有更優解,就是滑動窗口(也是雙指針法一種)。

定義兩個指針如start and end,一開始同時指向數組的開端,以end獲取數組的值,獲取到的值以變數sum儲存。

如果sum小於target,那end向後移。

如果sum大於target,那將窗口長度(也就是子數組長度:end - start + 1)比較變數output(一開始給output一個不可能超越的值如:nums.length + 1 or Math.Max()),取較小的值=output,之後再將sum - nums[start],同時將start++。

最後return output前要比較output是否一開始給的值,如果是就return 0(沒有符合的條件),不是就return output。

## 重點

雙指針法的重點一直都是如何控制指針,而滑動窗口也是雙指針法的一種,不過滑動窗口的兩個指針中間的子數組(也就是所謂的窗口)是有意義的,需要用到的,所以才叫滑動窗口。

這題的重點也是如何移動窗口(子數組)的頭及尾端,並將當前窗口(子數組)內的值以sum儲存。

如果當前窗口(子數組)內的值(sum)大於target,那窗口(子數組)就要縮小,也就是窗口(子數組)的頭端向後移動

如果當前窗口(子數組)內的值(sum)小於target,那窗口(子數組)的尾端向後移動繼續歷編數組。

## Code

暴力解法(leetCode上已經過不到 Exceeded time limit)
```typescript
const minSubArrayLen = (target: number, nums: number[]): number => {
    let output: number = nums.length + 1, sum: number;

    for(let i = 0; i < nums.length; i++){
        sum = 0
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum >= target) {
                output = output < j - i + 1 ? output : j - i + 1;
                break;
            }
        }
    }
    return output === nums.length + 1 ? 0 : output;
}
```

滑動窗口
```typescript
const minSubArrayLen = (target: number, nums: number[]): number => {
    let start: number = 0, end: number = 0, output: number = nums.length + 1, sum: number = 0;
    while (end < nums.length) {
        sum += nums[end];
        while (sum >= target) {
            output = output < end - start + 1 ? output : end - start + 1
            sum -= nums[start];
            start++
        }
        end++;
    }
    return output === nums.length + 1 ? 0 : output;
}
```
滑動窗口 version 2
```typescript
const minSubArrayLen = (target: number, nums: number[]): number => {
    let sum: number = 0, start: number = 0, end: number = 0, output: number = nums.length + 1;
    while(end < nums.length){
        sum += nums[end];
        if(sum >= target ) {            
            output = output > end - start + 1 ? end - start + 1 : output;
            sum = sum - nums[start] - nums[end];
            start++;
        }else {
            end++;
        }
    }
    return output === nums.length + 1 ? 0 : output;
};
```
