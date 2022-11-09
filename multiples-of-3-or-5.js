/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

//multiply 3 incrementally until the output is >= 1000
//For each multiple, add to an array.
//repeate for multiples of 5
// - We should probably filter repeated results (i.e. 15, 30, 60)

function sumOfThreeAndFive(){
  let multiples = [];
  let multiple = 3;

  for(i = 2; multiple < 1000; i++){
    multiples.push(multiple);
    multiple = 3*i;
  }

  console.log(multiples);

  //reset values for the '5' pass

  multiple = 5;

  for(i = 2; multiple < 1000; i++){
    if(!multiples.includes(multiple)){
      multiples.push(multiple);
    }
    multiple = 5*i;
  }

  console.log(multiples);

  //sorting to see repeates more clearly
  multiples.sort();
  console.log(multiples);

  let sum = 0;

  multiples.forEach(val => {
    sum += val;
  })

  console.log(`Sum: ${sum}`);
}

sumOfThreeAndFive();