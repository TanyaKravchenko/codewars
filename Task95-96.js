// 95. Grasshopper - Check for factor
//     This function should test if the factor is a factor of base.
//
//     Return true if it is a factor or false if it is not.
//
//     About factors
// Factors are numbers you can multiply together to get another number.
//
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
//
// Note: base is a non-negative number, factor is a positive number.


const checkForFactor = (base, factor) => base % factor === 0;

// 96. Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// //
// // Write a program that returns the girl's age (0-9) as an integer.
// //
// // Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return parseInt(inputString);
}

