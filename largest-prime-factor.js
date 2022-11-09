/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

//**UNSOLVED**

//--walk-trhough
//The high-level idea is to divide the number by the smallest prime number it can, 
//and keep diving the quotient by prime numbers recursively until we can't.
//the challenge here was starting with no known prime numbers and finding them before starting the operation.

//I had set up a cache so that as we discovered new prime numbers,
//we can reference them again easily as we stepped into the recursion, so we didn't have to find them again.

//The idea is to have a loop that maxes out at the input value's hald-way point (past that, we'd only dicover values we would have discovered anyway)
//With every iteration of the loop, we see if the iteration index was a prime number, 
//if it was, we would store it and attempt to divide the input by it and check if it was a factor (input % i === 0)
//  If not, continue and find the next prime number.
//  If so, take the quotient and use it as the input value (recursion)
//The point of the cache is during these recursions, we can start by going through the cache index until we get a valid factor, or if we can't, the loop continues form the last value of the cache.

//^^ the only issue with this is that we would need to make the cache a seperate object to maintain it's data through out the recursion stack.

//--previous attempts
//The biggest Issue i had before coming to this conclusion was brute forcing it took way too long and it would crash my browser.
//I had forget that every number can be divided down into a prime number, and instead i was checking every possible number inside the value and see if it
// 1. was a factor
// 2. if so, was a prime
//The new method I described in the walk-through section should graetly reduce the amount of steps we need to take before we hit a number that is prime.

function largestPrimeFactor(intVal){
  let primeNumbersCache = [];
  let halfVal = Math.ceil(intVal/2);
  
  for(let i = 2; i < halfVall; i++)
  //find a prime number
  isPrime(i);
  
  //divide it with input to find factor
  
  
  //find a factor
  console.log(primes);
  
}

function findFactors(intVal){
  // let factors = [];
  let half = Math.ceil(intVal/2);

  console.log(`finding factors`);

  for(let i = intVal; i > half; i--){
    console.log(`processing ${i}`);
    if(intVal % i === 0){
      if(isPrime(i)){
        console.log(`largest prime found: ${i}`);
        return;
      }
      
    }
  }

  console.log('no prime factors');

}

function isPrime(val){
  let half = Math.ceil(val/2);

  console.log(`checking prime`);

  for(let i = 2; i < half; i++){
    console.log(`processing ${i} of possible prime`);
    if(val % i === 0){
        console.log(`factor found: ${i}\nnot prime.` );
        return false;
    }
  }
  console.log(`${val} is prime`);
  return true;
}


largestPrimeFactor(600851475143);