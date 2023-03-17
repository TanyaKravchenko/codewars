// //111.Is it even?
// DESCRIPTION:
//     In this Kata we are passing a number (n) into a function.
//
// Your code will determine if the number passed is even (or not).
//
// The function needs to return either a true or false.
//
//     Numbers may be positive or negative, integers or floats.
//
//     Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
    return n % 2 === 0 ? true : false
}

// 112.Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }


// const goals = (...a) => a.reduce((s, v) => s + v, 0);  
