// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor) {
  return numbers.filter((number) => number % divisor === 0)
}

// const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
