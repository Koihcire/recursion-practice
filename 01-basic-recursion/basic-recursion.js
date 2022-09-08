//new born pair of rabbits (1m 1f) put in a pen
//rabbits mate at age one month
//rabbits have a 1 mth gestation period
//assume rabbits never die, they always reproduce one new pair (1m1f) every month from its second month
//how many female rabbits are there at the end of each year?

//hint: draw out the table in a trial and error method first to spot the pattern

const fib = (x)=>{
    if (x == 0 || x == 1){
        return 1
    } else {
        return (fib (x-1) + fib (x-2))
    }
}

console.log('after 12 months, rabbits present = ', fib(12))


//check if a string is a palindrome
//1. convert string to lower case
//2. strip away all punctuation and spaces
//3. if length is 0 or 1 long its a palindrome
//4. if first character matches last character + middle section is a palindrome (0 or 1 long) then its a palindrome



//find the solution from sum to n
//1. 1 + (1+1) + (2+1) + (3+1) + (4+1)
// (n-4) + (n-3) + (n-2) + (n-1) + n

function sumTo (n){
    if (n === 0) {return 0}
    const solutionToSubProblem = sumTo(n-1)
    return solutionToSubProblem + n
}

console.log('recursive sumto of 3 =', sumTo(3))

//1. if n = 3
//3x = sumTo (2) + 3
    //2x = sumTo (1) + 2
        //1x = sumTo (0) + 1
        //1x = 1
    //2x = 1 + 2
//3x = 3 + 3 = 6


//write a recursive function to find factorial of n
//eg. 5 x 4 x 3 x 2 x 1
//n x (n-1) ...... 1

function recursiveFactorial(n){
    if (n === 1){return 1}
    let subSolution = recursiveFactorial(n-1)
    return n * subSolution //solution
}

console.log('recursive factorial of 6 =', recursiveFactorial(6))

// 6x = 6 x recursivefactorial(5)
    //5x = 5 x recursivefactorial(4)
        //4x = 4 x recursivefactorial(3)
            //3x = 3 x recursivefactorial(2)
                //2x = 2 x recursivefactorial(1)
                    //1x = 1 x recursivefactorial(0)
                    //1x = 1
                //2x = 2 x 1 = 2
            //3x = 3 x 2 = 6
        //4x = 4 x 6 = 24
    //5x = 5 x 24 = 120
// 6x = 6 x 120 = 720



//given an integer n, return true if it is a power of three, otherwise return false
//eg. n = 27, 27=3^3, true
//eg. n = 13, no case where 3^x = 13, false

//3 X 1 = 3 , check if its less than n, equal to n, or more than n
//3 X 2 = 6

//3/3 = 1, 9/3=3, 27/3=9, 81/3 = 27
// n / 3 = 1, 

function isPowerofThree(n){
    let subSolution = n/3
    if (n/subSolution === 3){
        return true
    } else {return false} //base case
}

//ispowerofthree(27) = 27/9

console.log ('is 19643 a power of 3 = ', isPowerofThree(19643))