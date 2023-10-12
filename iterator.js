const numberArray = [1, 2, 3, 4, 5];

const squareIterator = {
  numbers: numberArray ,
  index: 0,

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.numbers.length) {
          const square = this.numbers[this.index] ** 2;
          this.index++;
          return { done: false, value: square };
        } else {
          return { done: true };
        }
      },
    };},
};

// You can use the iterator to loop through the squares of the numbers.
console.log("Squares of numbers in the array:");
for (const square of squareIterator) {
  console.log(square);
}
