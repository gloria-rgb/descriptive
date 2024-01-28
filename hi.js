class RandomMeanCalculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.num3 = 0;
  }

  generateRandomNumbers() {
    // Generating random numbers between 1 and 100
    this.num1 = Math.floor(Math.random() * 100) + 1;
    this.num2 = Math.floor(Math.random() * 100) + 1;
    this.num3 = Math.floor(Math.random() * 100) + 1;
  }

  calculateMean() {
    return (this.num1 + this.num2 + this.num3) / 3;
  }
}

// Example Usage:
const randomMeanCalculator = new RandomMeanCalculator();
randomMeanCalculator.generateRandomNumbers(); // Generate random numbers
const mean = randomMeanCalculator.calculateMean();

console.log('Generated Numbers:', randomMeanCalculator.num1, randomMeanCalculator.num2, randomMeanCalculator.num3);
console.log('Mean:', mean);




  class MedianCalculator {
    constructor(num1, num2, num3) {
      this.numbers = [num1, num2, num3];
    }
  
    calculateMedian() {
      const sortedNumbers = this.numbers.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedNumbers.length / 2);
  
      if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
      } else {
        return sortedNumbers[middleIndex];
      }
    }
  }
  
  // Example Usage:
  const calculator = new MedianCalculator(5, 10, 15);
  const median = calculator.calculateMedian();
  
  console.log('Median:', median);
  