# leetcode 454. 4Sum II
[leetcode link](https://leetcode.com/problems/4sum-ii/)

## 解題思路

定義一個hash table,用兩層loop歷遍nums1 及nums2,將兩個array所有元素相加的值放入hash table之中。之後再用兩層loop歷遍nums3 及nums4, 整看map之中有沒有0-(nums[k]+num[l])的key,有的話代表這四個數相加等如零,output要+=key的value,因為key的value有多少次就代表0-(nums[k]+num[l])有多少與其相加等如零的組合。

## Code

```typescript
const fourSumCount = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number => {
  let map:Map<number, number> = new Map<number, number>();
  let output:number = 0;
  let key:number;

  for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < nums2.length; j++) {
      key = nums1[i] + nums2[j];
      map.set(key, map.has(key) ? map.get(key)! + 1 : 1);
    }
  }

  for(let k = 0; k < nums3.length; k++) {
    for(let l = 0; l < nums4.length; l++) {
      key = 0 - (nums3[k] + nums4[l]);
      if(map.has(key)) {
        output += map.get(key)!;
      }
    }
  }

  return output;
}
```
