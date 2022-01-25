// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
    let out = "";
    for(let i = 0; i < str.length; i++){
        out = out + (str[i]+str[i])
    }
    return  out
}

const doubleChar = (str) => str.split("").map(c => c + c).join("");

