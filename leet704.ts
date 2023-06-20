const search = (nums: number[], target: number): number => {

    let start = 0;
    let end = nums.length - 1;
    let mid:number;

    while(start <= end){
        mid = Math.floor((start + end) / 2)
        if(target < nums[mid]){
            end = mid - 1
        } else if(target > nums[mid]){
            start = mid + 1
        } else if(target == nums[mid]){
            return mid
        }
    }

    return -1
};

console.log(search([-1,0,3,5,9,12],0));
console.log(search([-1,0,3,5,9,12,13],0));
