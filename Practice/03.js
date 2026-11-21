// Swap two variables

function swapValue(num1, num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  console.log("num1 = ", num1, "num2 = ", num2);
}

swapValue(10, 20);
