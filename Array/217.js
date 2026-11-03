var containsDuplicate = (nums) => {
  if (nums.length < 1) return false;

  let newNums = [...nums].sort((a, b) => a - b);

  for (let i = 1; i <= newNums.length; i++) {
    if (newNums[i - 1] === newNums[i]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));
