function solution(nums) {
    const removeDuplication = new Set(nums);
    const count = (nums.length)/2;
    
    return count>removeDuplication.size?removeDuplication.size:count;
}