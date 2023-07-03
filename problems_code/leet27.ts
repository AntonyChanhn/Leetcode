const removeElement = (nums:number[],val:number):number => {
    let slow = 0, fast = 0;
    while(fast < nums.length){
        if(val !== nums[fast]){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}

console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));
console.log(removeElement([0,1,2,2,3,0,4,2],4));
