# Problem: reverse left words

左旋轉字符串

字符串的左旋轉操作是把字符串前面的若幹個字符轉移到字符串的尾部。請定義一個函數實現字符串左旋轉操作的功能。比如，輸入字符串"abcdefg"和數字2，該函數將返回左旋轉兩位得到的結果"cdefgab"。

示例 1：
輸入: s = "abcdefg", k = 2
輸出: "cdefgab"

示例 2：
輸入: s = "lrloseumgh", k = 6
輸出: "umghlrlose"

限制：
1 <= k < s.length <= 10000

## 解題思路

## 重點

## Code

```typescript
const reverseLeftWords = (s:string, n:number):string => {
    let sArr:string[] = s.split("");
    // let start:number, end:number;

    const reverseWords = (start:number, end:number):void => {
        while(start < end) {
            [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
            start++;
            end--;
        }
    }

    reverseWords(0, n - 1);
    reverseWords(n, s.length - 1);
    reverseWords(0, s.length - 1);
    // start = 0, end = n - 1;
    // while(start < end) {
    //     [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
    //     start++;
    //     end--;
    // }

    // start = n, end = s.length - 1;
    // while(start < end) {
    //     [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
    //     start++;
    //     end--;
    // }

    // start = 0, end = s.length - 1;
    // while(start < end) {
    //     [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
    //     start++;
    //     end--;
    // }

    return sArr.join("");
}
```
