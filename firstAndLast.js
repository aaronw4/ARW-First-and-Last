var searchRange = function(nums, target) {
    let solution = []

    if (nums.length === 0) {
        return [-1, -1]
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && solution.length === 0) {
            if (i === nums.length - 1) {
                return [i, i]
            } else {
                solution.push(i)
            }
        } else if (nums[i] === target && solution.length > 0) {
            if (nums[i + 1] != target) {
                solution.push(i)
                return solution
            }
        } else if (nums[i] != target && solution.length > 0) {
            solution.push(i - 1)
            return solution
        } else if (nums[i] > target) {
            return [-1, -1]
        }
    }
    
    return [-1, -1]
};

console.log(searchRange([5,7,7,8,8,10], 11))