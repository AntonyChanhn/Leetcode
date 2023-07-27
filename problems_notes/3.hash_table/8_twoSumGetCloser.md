# Problem: Two sum get closer

輸入兩個number array(nums1, nums2)及一個number(target),要retrun兩個數相加最接近的兩個數, array可以重複及多於一個。例如:

input: nums1 = [9, -1, 8, 4], nums2 =[0, 4, -3, 10], target = 8

output: [[4, 4], [8, 0]]

## 解題思路

## 重點

## Code

```typescript
const twoSumCloser = (nums1:number[], nums2:number[], target:number):number[][] => {
    console.time("time: ");

    let output:number[][] = [];
    let map:Map<number, number[][]> = new Map<number, number[][]>();
    let start:number = 0, end:number = nums1.length - 1;
    let sum:number, key:number;

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    while(start < nums1.length && end >= 0) {
        sum = nums1[start] + nums2[end];
        key = Math.abs(sum - target);

        if(map.has(key)) {
            map.get(key)!.push([nums1[start], nums2[end]])
        } else {
            map.set(key, []);
            map.get(key)!.push([nums1[start], nums2[end]]);
            for(let [mapKey, val] of map) {
                if(mapKey > key) {
                    map.delete(mapKey);
                } else if(mapKey < key) {
                    map.delete(key);
                }
            }
        }

        if(sum < target) {
            start++;   
        } else if(sum > target) {
            end--;
        } else {
            start++;
            end--;
        }

    }

    for(let [key, val] of map ) {
        output = val;
    }

    return output;
}
```
