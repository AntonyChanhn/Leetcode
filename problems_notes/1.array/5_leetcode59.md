# 模擬題

## leetcode 59. Spiral Matrix II

[leetcode link](https://leetcode.com/problems/spiral-matrix-ii/)

## 解題思路

定義loop = n / 2(下捨入)來表示matrix要轉幾個圈, n = 2 or 3就是轉一個,  n = 4 or 5就是轉兩個。

在loop之中再用4個loop分別順序模擬matrix的旋轉: 左至右,上至下,右至左,下至上。

最後如果n是單數,matrix 中心的值需額外填入。

## 重點

這題的重點除了flow control外就是之前在二分法時提及過的**數組的區間**和**循環不變量**

在模擬matrix旋轉的loop時,邊角的處理如果交給下個loop去做, **數組的區間**就是**包頭不包尾**

並且一但確定了**數組的區間**是**包頭不包尾**,之後每個loop的條件都必須是**包頭不包尾**,這就是**循環不變量**。

## Code

```typescript
const generateMatrix = (n: number): number[][] => {
    let startX:number = 0, startY = 0,//設定每次loop的起始位置
    loop:number = n >> 1,//計算要loop幾次。n >> 1是元運算等同Math.floor(n/2)
    offset:number = 1,//計算邊界收縮的長度,第一次loop是1,第二次loop是2如此類推
    count = 1;需要輸入的值

    let x:number, y:number;
    //建立 2D array
    let output:number[][] = new Array(n).fill(0).map(i => new Array(n));

    //另一種寫法建立 2D array
    // let output:number[][] = [];
    // for(let i = 0; i < n; i++) {
    //     output[i] = []
    // }

    while (loop--) {
        x = startX;
        y = startY;
        //模擬左至右
        while(y < n - offset) {
            output[x][y] = count;
            count++;
            y++;
        }
        //模擬上至下
        while(x < n - offset) {
            output[x][y] = count;
            count++;
            x++;
        }
        //模擬右至左
        while(y >= offset) {
            output[x][y] = count;
            count++;
            y--;
        }
        //模擬下至上
        while(x >= offset) {
            output[x][y] = count;
            count++;
            x--;
        }
        startX++;
        startY++;
        offset++;
    }
    //如果n是單數中心的值需額外填入
    if(n % 2) {
        output[startX][startY] = count;
    }
    return output;
};
```
