function* generatePrimes(limit) {
    if (limit < 2) return;
  
    // Initialize an array to keep track of prime numbers.
    const primes = [2];
    
    yield 2; // The first prime number is always 2.
  
    for (let number = 3; number <= limit; number += 2) {
      let isPrime = true;
      
      // Check if the number is divisible by any previously found prime numbers.
      for (const prime of primes) {
         // No need to check beyond the square root.
        if (number % prime === 0) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        primes.push(number);
        yield number; // Yield the prime number.
      }
    }
  }
  
  // Use the generator to generate prime numbers up to a limit.
  const limit = 30; // Change this value to your desired limit.
  const primeGenerator = generatePrimes(limit);
  
  console.log(`Prime numbers up to ${limit}:`);
  for (const prime of primeGenerator) {
    console.log(prime);
  }
  