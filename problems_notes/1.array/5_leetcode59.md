# 模擬題

## leetcode 59. Spiral Matrix II

[leetcode link](https://leetcode.com/problems/spiral-matrix-ii/)

## 解題思路

## 重點

## Code

```typescript
const generateMatrix = (n: number): number[][] => {
    let startX:number = 0, startY = 0, loop:number = n >> 1, offset:number = 1, count = 1;
    let x:number, y:number;

    // let output:number[][] = [];
    // for(let i = 0; i < n; i++) {
    //     output[i] = []
    // }
    
    let output:number[][] = new Array(n).fill(0).map(i => new Array(n));

    while (loop--) {
        x = startX;
        y = startY;

        while(y < n - offset) {
            output[x][y] = count;
            count++;
            y++;
        }

        while(x < n - offset) {
            output[x][y] = count;
            count++;
            x++;
        }

        while(y >= offset) {
            output[x][y] = count;
            count++;
            y--;
        }

        while(x >= offset) {
            output[x][y] = count;
            count++;
            x--;
        }
        startX++;
        startY++;
        offset++;
    }
    
    if(n % 2) {
        output[startX][startY] = count;
    }
    return output;
};
```
