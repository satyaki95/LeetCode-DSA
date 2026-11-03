var removeElement = (nums, val) => {
  return nums.filter((i) => val !== i);
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
