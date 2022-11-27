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
// // Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5
// years old". The first character in the string is always a number.

function getAge(inputString) {
    return parseInt(inputString);
}

// 97. altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for
// details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//  "hello world".toAlternatingCase() === "HELLO WORLD" "HELLO WORLD".toAlternatingCase() === "hello world" "hello
// WORLD".toAlternatingCase() === "HELLO world" "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E" "String.prototype.toAlternatingCase".toAlternatingCase() ===
// "sTRING.PROTOTYPE.TOaLTERNATINGcASE" As usual, your function/method should be pure, i.e. it should not mutate the
// original string.

String.prototype.toAlternatingCase = function () {
    return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}

console.log('hello world'.toAlternatingCase())

// 98. All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd
// argument is found in the first one.  If no occurrences can be found, a count of 0 should be returned.  ("Hello",
// "o")  ==>  1 ("Hello", "l")  ==>  2 ("", "z")       ==>  0 Notes:  The first argument can be an empty string The
// second string argument will always be of length 1 FUNDAMENTALSSTRINGS

function strCount(str, letter) {
    return str.split('').filter(a => a === letter).length
}

console.log(strCount('Hello', 'x'))


let str = 'hello hi world test'
let ay = str.split('')
console.log(ay)

let bc = ['h', 'e', 'l', 'l', 'o']

let ggg = bc.join('')
console.log(ggg)

// 99. Welcome!
//
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding
// countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you
// already use an API that detects the user's location, so this is an easy win.  The Task Think of a way to store the
// languages as a database (eg an object). The languages are listed below so you can copy and paste! Write a 'welcome'
// function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your
// database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database english: 'Welcome', czech: 'Vitejte', danish: 'Velkomst', dutch: 'Welkom', estonian: 'Tere tulemast',
// finnish: 'Tervetuloa', flemish: 'Welgekomen', french: 'Bienvenue', german: 'Willkommen', irish: 'Failte', italian:
// 'Benvenuto', latvian: 'Gaidits', lithuanian: 'Laukiamas', polish: 'Witamy', spanish: 'Bienvenido', swedish:
// 'Valkommen', welsh: 'Croeso' Possible invalid inputs include:  IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip
// address IP_ADDRESS_NOT_FOUND - ip address not in the database IP_ADDRESS_REQUIRED - no ip address was supplied

function greet1(language) {
    const base = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    return base[language] || base.english;
}

// 100. Cat years, Dog years
// DESCRIPTION:
//
//     Kata Task
// I have a cat and a dog.
//
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
//     humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References
//
// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
//     http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
//         If you liked this Kata there is another related one here

let humanYearsCatYearsDogYears = (humanYears) => {
    let dogYears = 0
    let catYears = 0

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
        dogYears = 24;
    } else if (humanYears >= 3) {
        catYears = 4*humanYears +16;
        dogYears = 5*humanYears +14;
    }
    return [humanYears, catYears, dogYears];
}


console.log(humanYearsCatYearsDogYears(10))