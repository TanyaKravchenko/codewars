//105. I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each
// of the following phrases each time a petal was torn:  "I love you" "a little" "a lot" "passionately" "madly" "not at
// all" If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so
// on.  When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.  Your goal
// in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of
// petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i <= nbPetals; i++) {
        arr.push(arr[i]);
    }
    return arr[nbPetals - 1];
}

// function howMuchILoveYou(nbPetals) {
//     return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(nbPetals -1)%6];
// }

console.log(howMuchILoveYou(7))

// 106. Sort and Star

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values
// of the chars) and then return the first value.  The returned value must be a string, and have "***" between each of
// its letters.  You should not remove or add elements from/to the array.

function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

// 107. Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
    const resA = a.reduce((acc, rec) => acc * rec);
    const resB = b.reduce((acc, rec) => acc * rec);
    return Math.abs(resA - resB)
  }

//   function find_difference(a, b) {
//     return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
//   }

  console.log(findDifference([3, 2, 5], [1, 4, 4])) 

  
 // 108.  Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


  function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
  }

  // 109. Student's Final Grade

//   Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0

  function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
  }
console.log(finalGrade(10,0))


//110. Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
    let newArray = [];

    for(let counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }

    return newArray;
}