const sortedSquares = (nums: number[]): number[] => {
    let pointer1 = 0, pointer2= nums.length - 1;
    let output:number[] = [];

    for (let i = nums.length - 1; i >= 0; i--){
        if(nums[pointer1] ** 2 >= nums[pointer2] ** 2){
            output[i] = nums[pointer1] ** 2
            pointer1++
        } else if(nums[pointer1] ** 2 < nums[pointer2] ** 2){
            output[i] = nums[pointer2] ** 2
            pointer2--
        }
    }

    return output
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));


