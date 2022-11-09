/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

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