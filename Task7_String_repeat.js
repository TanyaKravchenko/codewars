// Write a function called repeatString which repeats the given string src exactly count times.

function repeatStr (n, s) {
    return s.repeat(n);
}

// function repeatStr (n, s) {
// var str="";
// for(var i=0; i < n; i++)
//   str+=s;
//   return str;
// }

console.log(repeatStr(5, '*'));