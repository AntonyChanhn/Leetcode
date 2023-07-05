# 雙指針法(快慢指針)

## leetcode 27. Remove Element

[leetcode link](https://leetcode.com/problems/remove-element/)

 + 題目指明要在原生的數組中進行修改,因此不能再定義新的數組,Space complexity 要為 O(1)。

 + 不能使用 built-in function,要從底層原理寫。

 + 數組在記憶體中的位置是連續的,不能單獨刪除, 只可以覆蓋。

## 解題思路及重點

### 暴力解法

用兩個 loop,外面的 loop 就是歷遍數組,裹面的 loop 就更新數組及其長度。

### 雙指針法(快慢指針)

定義兩個變數 fast 及 slow,一開始都是指向數組的頭,然後同時一起向後 loop,直到找到要刪除的目標時 fast 繼續向後移(fast 是用來歷遍數組,不會停止移動),slow 暫時不動,再者將 fast 取代 slow 以此循環直到結束,slow 就是修改後數組的長度。

這題的重點就是明白兩個指針的作用

fast 快指針: 歷遍數組,取得需要去取代慢指針的元素
slow 慢指針: 取得需要被取代的元素

## 總結

## Code

暴力解法

```typescript
const removeElement = (nums:number[],val:number):number =>{
    let size = nums.length;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val){
            for(let j = i + 1 ; j < nums.length; j++) {
                nums[j - 1] = nums[j]
            }
            i--
            size--
        }  
    }

    return size
}
```

雙指針法(快慢指針)

```typescript
const removeElement = (nums:number[],val:number):number =>{
    let fast:number = 0, slow:number = 0;

    while(fast < nums.length) {
        if(val !== nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    
    return slow
}
```
