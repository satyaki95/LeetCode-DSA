// Remove Duplicate Values

let arr = [10, 20, 10, 30, 20, 40];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
