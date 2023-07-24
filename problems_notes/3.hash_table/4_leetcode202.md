# leetcode 202. Happy Number

[leetcode link](https://leetcode.com/problems/happy-number/)

## 解題思路

定義一個function用作將數字的每個位都平方並且相加,再定義一個set。用一個loop將每個相加後不是1的數放進set,再使用function更新n的值,如果set中出現過n就return false; 如果n = 1 就return true。

## 重點

重點是如何處理不是happy number的數,因為n一直不等如1就會陷入無限循環。因此關鍵就是能否發現**在求和的過程中n總會有重複出現的時候**,所以使用set存下出現過的數,當n再次出現時就可以知道該數永遠不可能為1了。

**當要快速判斷一個元素是否曾經過,就可以考慮hash table。**

## Code

```typescript
const isHappy = (n: number): boolean => {
    let set:Set<number> = new Set<number>();
    let sum = (num:number):number => num.toString().split("").map((i) => +i).reduce((accu, curr) => accu + curr ** 2, 0);

    while(n != 1) {
        if(set.has(n)) return false;
        set.add(n);
        n = sum(n);
    }

    return true;
}
```
