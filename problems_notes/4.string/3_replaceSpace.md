# Problem: replace space

把輸入的string中每一個空白轉換成%20。例如:

input:"we are happy.", output:"we%20are%20happy."

## 解題思路

## 重點

## Code

```typescript
const replace = (s:string):string => {
    let space:number = 0;
    let left:number, right:number;
    let strArr:string[] = s.split("");

    for(let char of s) {
        if(char == " ") space++;
    }

    left = strArr.length - 1;
    right = left + 2 * space;
    while(space) {
        if(strArr[left] == " ") {
            strArr[right] = "0";
            strArr[--right] = "2";
            strArr[--right] = "%";
            space--
        } else {
            strArr[right] = strArr[left];
        }
        left--;
        right--;
    }

    return strArr.join("");
}
```
