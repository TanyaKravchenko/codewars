// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

console.log(century(1900));
console.log(century(1815));
console.log(century(1910));


