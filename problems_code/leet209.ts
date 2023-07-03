const minSubArrayLen = (target: number, nums: number[]): number => {
  let slow = 0,
    fast = 0,
    sum = 0,
    length = Number.MAX_VALUE;

  while (fast < nums.length) {
    sum += nums[fast];
    if (sum >= target) {
      sum = sum - nums[slow] - nums[fast];
      length = length < fast - slow + 1 ? length : fast - slow + 1;
      slow++;
    } else {
      fast++;
    }
  }

  return length === Number.MAX_VALUE ? 0 : length;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]));
console.log(minSubArrayLen(7, [7, 7, 7, 7, 7, 7]));
