// 101. All Star Code Challenge #18
// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #18
//
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
//     If no occurrences can be found, a count of 0 should be returned.
//
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
//
//     The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
    return str.split('').filter(el =>  el === letter).length
}

// function strCount(str, letter){
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == letter)
//             count++;
//     }
//     return count;
// }

console.log(strCount('Hello', 'l'))


// 102.Is it a palindrome?
//     Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) => {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
}

console.log(isPalindrome('HEllE'))


// 103.Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//
//     Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
    let result = []
    for(let i = 0; i <= n; i++) {
        result.push(2 ** i)
    }
    return result
}

console.log(powersOfTwo(4))





















