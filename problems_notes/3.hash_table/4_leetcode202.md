# leetcode 202. Happy Number

[leetcode link](https://leetcode.com/problems/happy-number/)

## 解題思路



## 重點

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
