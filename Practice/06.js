// Prime Number

let primeNumber = 23;

let isPrime = true;

if (primeNumber <= 1) isPrime = false;

for (let i = 2; i < primeNumber; i++) {
  if (primeNumber % i === 0) {
    isPrime = false;
    break;
  }
}

isPrime ? console.log("Prime") : console.log("Not Prime");
