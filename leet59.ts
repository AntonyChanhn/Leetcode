const generateMatrix = (n: number): number[][] => {
    let output:number[][] = [];
    let startX = 0, startY = 0, loop = n >> 1, offset = 1, value = 1;
    let x, y;
    for(let i = 0; i < n; i++) {
        output[i] = []
    }

    while(loop--) {
        x = startX
        y = startY

        while(y < n - offset) {
            output[x][y++] = value++
        }

        while(x < n - offset) {
            output[x++][y] = value++
        }

        while(y >= offset) {
            output[x][y--] = value++
        }

        while(x >= offset) {
            output[x--][y] = value++ 
        }

        offset++
        startX++
        startY++
    }

    if(n % 2){
        let mid = n >> 1
        output[mid][mid] = value
    }

    return output
};

// console.log(generateMatrix(3)); //[[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(4)); //[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
// console.log(generateMatrix(5)); //[[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
