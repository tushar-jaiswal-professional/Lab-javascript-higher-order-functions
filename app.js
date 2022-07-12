/*Function #1: Array Slice

const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1,4);
console.log(modifiedFood)

-------------------------------------------------------------------------------------

Function #2: Array Splice

const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods.splice(2,0,'noodles','icecream');
let modifiedFood = [...foods]
console.log(modifiedFood);

-------------------------------------------------------------------------------------

Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(element=>element%2==0)
console.log(isEven)

const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
let modified_numberArray = numberArray.filter(element=>isPrime(element))
console.log(modified_numberArray)

-------------------------------------------------------------------------------------

Function #4: Reject

const numberArray = [12,324,213,4,2,3,45,4234];
const nonPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
let modified_numberArray = numberArray.filter(element=>!nonPrime(element))
console.log(modified_numberArray)

-------------------------------------------------------------------------------------

Function #5: Lambda

const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(element=>element%2==0)
console.log(isEven)

-------------------------------------------------------------------------------------

Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(num=>num*num);
console.log(findSquareOfNumbers)

-------------------------------------------------------------------------------------

Function #7: Reduce
*/
const myArray = [2,3,5,10];
let multiply = myArray.reduce((current_val,element)=>current_val*element,1)
console.log(multiply)