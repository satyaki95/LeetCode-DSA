// Reverse a Number

let number = 12345;
let carry,
  reverse = 0;

while (number > 0) {
  carry = number % 10;
  reverse = reverse * 10 + carry;
  number = Math.floor(number / 10);
}

console.log(reverse);
